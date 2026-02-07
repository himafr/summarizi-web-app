# Summarizi - Video Feed App 🎥

A TikTok-like video feed application built with Next.js 16, React 19, and Tailwind CSS.

## Features ✨

- **Infinite Scroll Video Feed** - Vertical scrolling with smooth transitions between videos
- **Full-Screen Video Player** - Each video takes up the entire screen
- **Auto-Play Videos** - Videos automatically play when they come into view
- **Mute/Unmute Audio** - Toggle sound with the sound button
- **Video Sharing** - Share videos using the native share API or copy to clipboard
- **Author Profiles** - Quick follower button to check out creators
- **View Analytics** - See video views and share counts
- **No Comments/Likes** - Clean, minimal interface focused on video exploration
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Multiple Navigation Methods** - Scroll wheel, arrow keys, or touch swipe

## Navigation Controls 🎮

- **Mouse Wheel** - Scroll up/down to navigate videos
- **Arrow Keys** - Use ↑ and ↓ to move between videos
- **Touch Swipe** - Swipe up/down on mobile devices
- **Click Video** - Click on video to play/pause

## Installation 🚀

1. **Install dependencies**
```bash
npm install
```

2. **Run dev server**
```bash
npm run dev
```

3. **Open in browser**
Navigate to `http://localhost:3000`

## Build for Production 📦

```bash
npm run build
npm start
```

## Project Structure 📁

```
app/
├── components/
│   ├── VideoCard.tsx      # Individual video player component
│   └── VideoFeed.tsx      # Main feed with infinite scroll
├── data/
│   └── videos.ts          # Mock video data
├── types/
│   └── index.ts           # TypeScript interfaces
├── globals.css            # Global styles and animations
├── layout.tsx             # Root layout
└── page.tsx               # Home page
```

## Key Components 🎬

### VideoFeed
- Manages video list state
- Handles scroll/keyboard/touch navigation
- Implements lazy loading for more videos
- Tracks currently visible video

### VideoCard
- Renders individual video with player controls
- Auto-play when visible, pause when not
- Mute/unmute functionality
- Share button
- Author information and stats

## Mock Data 📊

The app comes with 5 sample videos featuring:
- Travel content
- Cooking videos
- Fitness content
- Pet videos
- Nature videos

Videos auto-generate when scrolling near the end for infinite scroll experience.

## Styling 🎨

- **Dark Theme** - Black background with white text (TikTok-like)
- **Tailwind CSS** - Modern utility-first CSS framework
- **Smooth Animations** - Transitions and scroll effects
- **Responsive** - Mobile-first design approach

## Browser Support 🌐

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements 🔮

Possible additions:
- Video upload functionality
- User authentication
- Search and discovery
- Save/bookmark videos
- Dark/light mode toggle
- Video filters
- Sound effects for interactions

## License 📄

MIT License - Feel free to use this project for personal or commercial use.

---

Built with ❤️ using Next.js 16 and React 19
