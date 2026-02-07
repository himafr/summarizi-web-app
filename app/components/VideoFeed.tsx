'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import VideoCard from './VideoCard';
import { mockVideos, generateMoreVideos } from '@/app/data/videos';
import { Video } from '@/app/types';

export default function VideoFeed() {
  const [videos, setVideos] = useState<Video[]>(mockVideos);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollRef = useRef(0);
  const visibleIndexRef = useRef(0);

  // Update ref whenever visibleIndex changes
  useEffect(() => {
    visibleIndexRef.current = visibleIndex;
  }, [visibleIndex]);

  // Load more videos when scrolling near the end
  const loadMoreVideos = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const page = Math.floor(videos.length / mockVideos.length);
      setVideos(prev => [...prev, ...generateMoreVideos(page)]);
      setIsLoading(false);
    }, 500);
  }, [videos.length]);

  // Handle wheel scroll for vertical video navigation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      // Increased threshold to 1000ms to prevent multiple rapid scrolls
      if (now - lastScrollRef.current < 1000) return;
      lastScrollRef.current = now;

      // Determine scroll direction
      const direction = e.deltaY > 0 ? 1 : -1;
      let newIndex = visibleIndexRef.current + direction;

      // Bounds checking
      newIndex = Math.max(0, Math.min(newIndex, videos.length - 1));

      if (newIndex !== visibleIndexRef.current) {
        setVisibleIndex(newIndex);
        
        // Load more videos if near the end
        if (newIndex >= videos.length - 3) {
          loadMoreVideos();
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [videos.length, loadMoreVideos]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const now = Date.now();
      if (now - lastScrollRef.current < 600) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        lastScrollRef.current = now;
        let newIndex = visibleIndexRef.current + 1;
        newIndex = Math.max(0, Math.min(newIndex, videos.length - 1));
        
        if (newIndex !== visibleIndexRef.current) {
          setVisibleIndex(newIndex);
          if (newIndex >= videos.length - 3) {
            loadMoreVideos();
          }
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        lastScrollRef.current = now;
        let newIndex = visibleIndexRef.current - 1;
        newIndex = Math.max(0, Math.min(newIndex, videos.length - 1));
        
        if (newIndex !== visibleIndexRef.current) {
          setVisibleIndex(newIndex);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [videos.length, loadMoreVideos]);

  // Touch swipe handling for mobile
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 50) {
        const now = Date.now();
        if (now - lastScrollRef.current < 1000) return;
        lastScrollRef.current = now;

        const direction = diff > 0 ? 1 : -1;
        let newIndex = visibleIndexRef.current + direction;
        newIndex = Math.max(0, Math.min(newIndex, videos.length - 1));

        if (newIndex !== visibleIndexRef.current) {
          setVisibleIndex(newIndex);
          if (newIndex >= videos.length - 3) {
            loadMoreVideos();
          }
        }
      }
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [videos.length, loadMoreVideos]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Videos Container */}
      <div
        className="transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(-${visibleIndex * 100}vh)`,
        }}
      >
        {videos.map((video, index) => (
          <VideoCard
            key={video.id}
            video={video}
            isVisible={index === visibleIndex}
          />
        ))}
      </div>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-50">
          <div className="animate-spin">
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full" />
          </div>
        </div>
      )}

      {/* Video Counter */}
      <div className="absolute top-4 right-4 text-white text-xs bg-black/30 px-3 py-1 rounded-full z-20">
        {visibleIndex + 1} / {videos.length}
      </div>

      {/* Navigation Hint */}
      {visibleIndex === 0 && !isLoading && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/50 text-xs animate-bounce z-10">
          ↓ Swipe to explore
        </div>
      )}
    </div>
  );
}
