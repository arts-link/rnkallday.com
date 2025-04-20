document.addEventListener('DOMContentLoaded', function() {
  const videoElement = document.getElementById('hero-video');
  if (videoElement) {
    // Determine if we're in production or development
    const isProduction = window.location.hostname === 'rnkallday.com';

    if (isProduction) {
      // In production, use a direct link to the raw file in GitHub
      // This bypasses GitHub Pages and Git LFS issues
      const directGitHubUrl = 'https://raw.githubusercontent.com/arts-link/rnkallday.com/main/static/videos/hero.mp4';
      videoElement.src = directGitHubUrl;
      console.log('Loading video from GitHub raw URL:', directGitHubUrl);
    } else {
      // In development, use the local path
      videoElement.src = '/videos/hero.mp4';
      console.log('Loading video from local path: /videos/hero.mp4');
    }

    // Add event listeners for debugging
    videoElement.addEventListener('error', function(e) {
      console.error('Video error:', e);
      // If there's an error, try an alternative method
      if (isProduction) {
        // Try using the GitHub LFS media URL as a fallback
        const lfsMediaUrl = 'https://media.githubusercontent.com/media/arts-link/rnkallday.com/main/static/videos/hero.mp4';
        videoElement.src = lfsMediaUrl;
        console.log('Trying fallback LFS media URL:', lfsMediaUrl);
      }
    });

    videoElement.addEventListener('canplay', function() {
      console.log('Video can play now from:', videoElement.src);
    });
  }
});
