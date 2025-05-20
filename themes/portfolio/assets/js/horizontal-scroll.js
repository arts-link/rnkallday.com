// Horizontal scroll function based on GSAP
// Adapted from https://codepen.io/jdillon/pen/LEYJYYK

function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1),
    totalWidth, curX, distanceToStart, distanceToLoop, item, i;
  
  gsap.set(items, { xPercent: 0 });
  
  // Get widths and set xPercents
  for (i = 0; i < length; i++) {
    item = items[i];
    widths[i] = item.offsetWidth;
    xPercents[i] = snap(parseFloat(gsap.getProperty(item, "x", "px")) / widths[i] * 100 + gsap.getProperty(item, "xPercent"));
  }
  
  // Calculate total width and distances
  gsap.set(items, { xPercent: i => xPercents[i] });
  totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
  
  // Create the timeline animation
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = xPercents[i] / 100 * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
      .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  
  // Helper functions for the timeline
  function toIndex(index, vars) {
    vars = vars || {};
    (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
    if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  
  // Add properties to the timeline
  tl.next = vars => toIndex(curIndex+1, vars);
  tl.previous = vars => toIndex(curIndex-1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  
  return tl;
}

// Initialize the horizontal scroll when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Check if we have the elements needed for the horizontal scroll
  const wordCascadeItems = document.querySelectorAll('.word-cascade-item');
  
  if (wordCascadeItems.length > 0) {
    // Load GSAP if it's not already loaded
    if (typeof gsap === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
      script.onload = initHorizontalScroll;
      document.head.appendChild(script);
    } else {
      initHorizontalScroll();
    }
  }
  
  function initHorizontalScroll() {
    const leftContainer = document.querySelector('.word-cascade-container');
    const rightContainer = document.querySelector('.word-cascade-container:last-child');
    
    if (leftContainer && rightContainer) {
      // Create horizontal loops for both containers
      const leftLoop = horizontalLoop(leftContainer.querySelectorAll('.word-cascade-item'), {
        repeat: -1,
        speed: 0.5,
        reversed: false
      });
      
      const rightLoop = horizontalLoop(rightContainer.querySelectorAll('.word-cascade-item'), {
        repeat: -1,
        speed: 0.5,
        reversed: true
      });
      
      // Add hover effects
      leftContainer.addEventListener('mouseenter', () => {
        gsap.to(leftLoop, { timeScale: 0.2, duration: 0.5 });
      });
      
      leftContainer.addEventListener('mouseleave', () => {
        gsap.to(leftLoop, { timeScale: 1, duration: 0.5 });
      });
      
      rightContainer.addEventListener('mouseenter', () => {
        gsap.to(rightLoop, { timeScale: 0.2, duration: 0.5 });
      });
      
      rightContainer.addEventListener('mouseleave', () => {
        gsap.to(rightLoop, { timeScale: 1, duration: 0.5 });
      });
    }
  }
});
