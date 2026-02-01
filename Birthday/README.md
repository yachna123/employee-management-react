# Birthday Wishes App 🎂

A beautiful, animated birthday wishes web application built with React and Vite.

## Features

- **QR Code Landing Page**: Generate and scan a QR code to start the birthday experience
- **5-Second Countdown**: Exciting countdown animation before revealing the birthday page
- **Animated Birthday Page**: Beautiful gradient background with floating balloons and hearts
- **Memories Gallery**: Responsive grid layout showcasing special memories with photos and videos
- **Interactive Memory Modal**: Click on any photo to view it fullscreen with a heartfelt description
- **Smooth Animations**: Staggered card animations, hover effects, and transitions
- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Custom Fonts**: Uses Dancing Script and Quicksand for elegant typography
- **Video Support**: Special moments captured in video format

## User Journey

1. **Start**: User scans QR code or visits the landing page
2. **Countdown**: 5-second animated countdown builds excitement
3. **Birthday Page**: Beautiful birthday wishes with personalized message
4. **Memories**: Click "View Memories" to see a stunning photo gallery
5. **Details**: Click any photo to view it fullscreen with a special message


## Tech Stack

- React 19.2.0
- React Router DOM (for navigation)
- Vite (build tool)
- CSS3 (animations and gradients)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the Birthday folder:
   ```bash
   cd Birthday
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

## Project Structure

```
Birthday/
├── public/
│   ├── images/          # Birthday photos (8 images)
│   ├── videos/          # Special video moments
│   └── print-qr.html    # Printable QR code page
├── src/
│   ├── components/
│   │   ├── QRCodePage.jsx         # QR code landing page
│   │   ├── QRCodePage.css         # QR code page styles
│   │   ├── CountdownPage.jsx      # 5-second countdown
│   │   ├── CountdownPage.css      # Countdown styles
│   │   ├── BirthdayPage.jsx       # Main birthday page
│   │   ├── BirthdayPage.css       # Birthday page styles
│   │   ├── MemoriesPage.jsx       # Memories gallery with modal
│   │   └── MemoriesPage.css       # Memories page styles
│   ├── App.jsx          # Main app with routing
│   ├── App.css          # App styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
└── index.html           # HTML template
```

## Routes

- `/` - QR Code landing page
- `/countdown` - 5-second countdown animation
- `/birthday` - Main birthday wishes page
- `/memories` - Photo gallery with clickable memories


## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Adding More Photos

1. Add your images to the `public/images/` folder
2. Update the `MemoriesPage.jsx` component to include new image entries

### Adding More Videos

1. Add your videos to the `public/videos/` folder
2. Update the `MemoriesPage.jsx` component to include new video entries

### Changing Colors

Edit the CSS variables in `BirthdayPage.css` or `MemoriesPage.css`:

```css
:root {
  --pink: #ff6b9d;
  --pink-light: #ffb3d9;
  --pink-dark: #e91e63;
  --purple: #c77dff;
  --cream: #fff5f8;
}
```

## License

This is a personal project created with love ❤️

## Acknowledgments

- Google Fonts for Dancing Script and Quicksand fonts
- Unsplash for placeholder images
