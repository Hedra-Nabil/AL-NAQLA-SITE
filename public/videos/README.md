# Demo Video Instructions

## Adding Your Demo Video

To add your AL-NAQLA app demo video:

1. **Record your demo video:**
   - Show the main features of the AL-NAQLA app
   - Keep it between 30-60 seconds
   - Use portrait orientation (mobile aspect ratio)
   - Show transitions between different screens smoothly

2. **Video specifications:**
   - Format: MP4 (H.264 codec recommended)
   - Resolution: 720p or 1080p 
   - Aspect ratio: 9:16 (mobile portrait) or 16:9
   - File size: Keep under 10MB for web optimization
   - Quality: Balance between quality and file size

3. **Save the video:**
   - Name it `demo.mp4`
   - Place it in this `/videos/` folder
   - The HTML is already configured to use this file

4. **Optional: Add a poster image:**
   - Create a screenshot from your video
   - Name it `app-preview.jpg` 
   - Place it in the `/images/` folder
   - This shows while the video loads

## Video Content Suggestions

Your demo video should show:
- App splash screen/login
- Dashboard overview
- Customer management features
- Trip/transportation tracking
- Reports or analytics view
- Settings or preferences

## Fallback Handling

If no video is provided, the current fallback will show:
- Mobile phone icon
- "App Preview" text
- "Your browser doesn't support video playback" message

## Testing

After adding your video:
1. Open the website in a browser
2. Check that the video plays automatically (muted)
3. Verify it looks good on different screen sizes
4. Test the fallback by temporarily renaming the video file