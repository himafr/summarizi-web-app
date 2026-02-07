'use client';

import { Video } from '@/app/types';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

interface VideoCardProps {
  video: Video;
  isVisible: boolean;
}

// SVG Icons
const VolumeIcon = ({ isMuted }: { isMuted: boolean }) => {
  if (isMuted) {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <line x1="23" y1="9" x2="17" y2="15"></line>
        <line x1="17" y1="9" x2="23" y2="15"></line>
      </svg>
    );
  }
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
    </svg>
  );
};

const ShareIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="18" cy="5" r="3"></circle>
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
  </svg>
);

const HeartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

export default function VideoCard({ video, isVisible }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isVisible) {
      videoRef.current.play().catch(() => {
        // Auto-play was prevented
      });
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isVisible]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: video.title,
          text: video.description,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: Copy to clipboard
      const text = `${video.title}\n${video.description}`;
      navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
      });
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center snap-center overflow-hidden">
      {/* Video Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          loop
          muted={isMuted}
          playsInline
          onClick={togglePlayPause}
        >
          <source src={video.videoUrl} type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/40 pointer-events-none" />

        {/* Play/Pause Indicator */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-white/50 text-6xl">▶</div>
          </div>
        )}

        {/* Bottom Info Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
          {/* Author Info */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-white">
              <Image
                src={video.author.avatar}
                alt={video.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">{video.author.name}</div>
              <div className="text-xs opacity-75">{video.author.username}</div>
            </div>
            <button className="bg-white text-black px-3 py-1 rounded-full text-xs font-semibold hover:bg-gray-200 transition">
              Follow
            </button>
          </div>

          {/* Description */}
          <div className="text-sm line-clamp-2 mb-3 text-white">{video.description}</div>

          {/* Stats */}
          <div className="text-xs opacity-75 flex gap-4 mb-4">
            <span>👁️ {(video.views / 1000).toFixed(0)}K views</span>
            <span>📤 {(video.shares / 1000).toFixed(0)}K shares</span>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="absolute right-4 bottom-1/2 translate-y-1/2 flex flex-col gap-4 z-20">
          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className="flex flex-col items-center gap-2 text-white hover:scale-110 transition transform"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            <VolumeIcon isMuted={isMuted} />
            <span className="text-xs">Sound</span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="flex flex-col items-center gap-2 text-white hover:scale-110 transition transform"
          >
            <ShareIcon />
            <span className="text-xs">{(video.shares / 1000).toFixed(0)}K</span>
          </button>

          {/* Like Button (Visual only, no functionality) */}
          <div className="flex flex-col items-center gap-2 text-white/50 cursor-not-allowed">
            <HeartIcon />
            <span className="text-xs">Like</span>
          </div>
        </div>

        {/* Top Info */}
        <div className="absolute top-4 left-4 text-white text-xs opacity-75 z-10">
          {video.createdAt}
        </div>
      </div>
    </div>
  );
}
