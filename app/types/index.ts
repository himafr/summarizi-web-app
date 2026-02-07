export interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  duration: number;
  author: {
    name: string;
    avatar: string;
    username: string;
  };
  views: number;
  shares: number;
  createdAt: string;
}
