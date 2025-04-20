document.addEventListener('DOMContentLoaded', function() {
  const videoElement = document.getElementById('hero-video');
  if (videoElement) {
    // Add a cache-busting parameter to prevent caching issues
    const cacheBuster = new Date().getTime();

    // Always use the local path for simplicity
    videoElement.src = `/videos/hero.mp4?v=${cacheBuster}`;
    console.log(`Loading video from path: /videos/hero.mp4?v=${cacheBuster}`);

    // Add event listeners for debugging
    videoElement.addEventListener('error', function(e) {
      console.error('Video error:', e);
      // If there's an error, try a direct URL as fallback
      videoElement.src = `https://rnkallday.com/videos/hero.mp4?v=${cacheBuster}`;
      console.log(`Trying fallback URL: https://rnkallday.com/videos/hero.mp4?v=${cacheBuster}`);
    });

    videoElement.addEventListener('canplay', function() {
      console.log('Video can play now from:', videoElement.src);
    });
  }
});
