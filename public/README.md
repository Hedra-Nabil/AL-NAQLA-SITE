# Assets Directory

This directory contains all the media files and assets for the AL-NAQLA website.

## Directory Structure

### `/images/`
- **app-preview.jpg** - Main preview image for the mobile app (poster for video)
- **logo.png** - AL-NAQLA logo
- **icon-192.png** - App icon 192x192
- **icon-512.png** - App icon 512x512
- **screenshot-*.jpg** - Actual app screenshots (dashboard, customers, trips, reports)
- **hero-bg.jpg** - Hero section background image (optional)

### `/videos/`
- **demo.mp4** - Main demo video of the app (recommended: 30-60 seconds)
- Should be optimized for web (compressed, reasonable file size)

### `/icons/`
- **favicon.ico** - Website favicon
- **apple-touch-icon.png** - Apple touch icon
- **truck.ico** - Truck icon (referenced in HTML)

## File Requirements

### Video Specifications
- Format: MP4 (H.264)
- Resolution: 720p or 1080p (mobile-friendly aspect ratio preferred)
- Duration: 30-60 seconds
- Size: Under 10MB for web optimization

### Image Specifications
- Screenshots: PNG format, mobile device resolution
- Logo/Icons: PNG with transparency
- Preview images: JPG format, optimized for web

## Usage Notes

- All paths in HTML are relative to the root directory
- Make sure video files are web-optimized
- Include fallback images for video elements
- Consider different screen densities for images