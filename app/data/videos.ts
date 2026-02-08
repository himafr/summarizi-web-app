import { Video } from '../_@types';

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Amazing Sunset View',
    description: 'Beautiful sunset captured at the beach. Golden hour magic! 🌅',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=400&h=800&fit=crop',
    duration: 120,
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      username: '@sarah_travels'
    },
    views: 12500,
    shares: 340,
    createdAt: '2 days ago'
  },
  {
    id: '2',
    title: 'Cooking Challenge',
    description: 'Making pasta from scratch. Let\'s see how it turns out! 👨‍🍳',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=800&fit=crop',
    duration: 180,
    author: {
      name: 'Marco Chef',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      username: '@marco_kitchen'
    },
    views: 45300,
    shares: 1200,
    createdAt: '4 hours ago'
  },
  {
    id: '3',
    title: 'Fitness Motivation',
    description: 'Quick morning workout routine. Join the fitness journey! 💪',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=800&fit=crop',
    duration: 90,
    author: {
      name: 'Alex Fitness',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
      username: '@alex_fit'
    },
    views: 78900,
    shares: 2100,
    createdAt: '1 hour ago'
  },
  {
    id: '4',
    title: 'Travel Vlog',
    description: 'Exploring the mountains of Switzerland. Absolutely stunning! 🏔️',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerJoyrides.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=800&fit=crop',
    duration: 240,
    author: {
      name: 'Elena World',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      username: '@elena_adventures'
    },
    views: 234500,
    shares: 5600,
    createdAt: '3 days ago'
  },
  {
    id: '5',
    title: 'Pet Playtime',
    description: 'My adorable puppy learned a new trick! 🐕',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/Sintel.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=400&h=800&fit=crop',
    duration: 45,
    author: {
      name: 'Pet Lovers',
      avatar: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=100&h=100&fit=crop',
      username: '@cute_pets'
    },
    views: 567200,
    shares: 8900,
    createdAt: 'Today'
  },
];

// Generate more mock videos for infinite scroll
export const generateMoreVideos = (page: number): Video[] => {
  return mockVideos.map((video, index) => ({
    ...video,
    id: `${page}-${index}`,
    views: Math.floor(Math.random() * 500000),
    shares: Math.floor(Math.random() * 10000),
  }));
};
