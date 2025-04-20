document.addEventListener('DOMContentLoaded', function() {
  const videoElement = document.getElementById('hero-video');
  if (videoElement) {
    // For GitHub Pages with Git LFS, we need to use the raw content URL
    // This is the format for GitHub LFS files
    const isProduction = window.location.hostname === 'rnkallday.com';

    if (isProduction) {
      // In production, use the GitHub raw content URL for LFS files
      // This bypasses the Git LFS pointer and gets the actual file
      const repoOwner = 'arts-link';
      const repoName = 'rnkallday.com';
      const branch = 'main';
      const filePath = 'static/videos/hero.mp4';

      const rawUrl = `https://media.githubusercontent.com/media/${repoOwner}/${repoName}/${branch}/${filePath}`;
      console.log('Loading video from GitHub LFS URL:', rawUrl);

      videoElement.src = rawUrl;
    } else {
      // In development, use the local path
      videoElement.src = '/videos/hero.mp4';
      console.log('Loading video from local path');
    }

    // Add event listeners for debugging
    videoElement.addEventListener('error', function(e) {
      console.error('Video error:', e);
    });

    videoElement.addEventListener('canplay', function() {
      console.log('Video can play now');
    });
  }
});
