document.addEventListener('DOMContentLoaded', function() {
  const videoElement = document.getElementById('hero-video');
  if (videoElement) {
    // Try multiple paths to find the working one
    const possiblePaths = [
      '/videos/hero.mp4',
      'videos/hero.mp4',
      'https://rnkallday.com/videos/hero.mp4',
      window.location.origin + '/videos/hero.mp4'
    ];
    
    // Function to check if a video source works
    function tryVideoSource(index) {
      if (index >= possiblePaths.length) {
        console.error('Could not load video from any path');
        return;
      }
      
      const path = possiblePaths[index];
      console.log('Trying video path:', path);
      
      videoElement.src = path;
      
      // Listen for errors and try the next path if this one fails
      const errorHandler = function() {
        console.log('Failed to load video from:', path);
        videoElement.removeEventListener('error', errorHandler);
        tryVideoSource(index + 1);
      };
      
      videoElement.addEventListener('error', errorHandler);
      
      // If video can play, remove the error handler
      videoElement.addEventListener('canplay', function() {
        console.log('Successfully loaded video from:', path);
        videoElement.removeEventListener('error', errorHandler);
      }, { once: true });
    }
    
    // Start trying paths
    tryVideoSource(0);
  }
});
