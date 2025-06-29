// This could be manually setup in CSS with hard-coded values
// But that's a bit messy for multiple designs or swapping out the cut layer.
const cutLayer = document.querySelector('#cutLayer');
const path = document.querySelector('#layer1-inverse');
var length = path.getTotalLength();

cutLayer.style.strokeDasharray = length;
cutLayer.style.strokeDashoffset = length;
console.log(length); 

//////
// Want to use WAAPI instead? Here is a basic implementation for this SVG set.
// Using WAAPI opens up a whole bunch of extra posibilities: https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API
//////

// const cutGroup= document.querySelector('#cutGroup');
// const scrollTimeline = new ScrollTimeline();

// const strokeAnim = cutLayer.animate(
//   [
//     { strokeDashoffset: length },
//     { strokeDashoffset: 0 }
//   ],
//   {
//     timeline: scrollTimeline,
//     easing: 'ease-in',
//     rangeStart: "entry 0%", // Start when 5% of the element enters the viewport
//     rangeEnd: "exit 100%",   // End when 25% of the element has exited the viewport
//     fill: 'both'
//   }
// );

// const opacityAnim = cutGroup.animate(
//   [
//     { opacity: 1 },
//     { opacity: 0 }
//   ],
//   {
//     timeline: scrollTimeline,
//     easing: 'linear',
//     rangeStart: "entry 95%",  // Start fading when stroke is complete
//     rangeEnd: "exit 100%",   // Fully transparent at end
//     fill: 'both'
//   }
// );



/////
// One cool thing with WAAPI, is you can trigger stuff when the animation ends. or starts... or all sorts of things :)
////

// strokeAnim.onfinish = () => {
//   console.log("Yay - Animation Finished");
//   const fadeOut = cutGroup.animate(
//     [
//       {opacity: 1},
//       {opacity: 0}
//     ],
//     {
//       duration: 1000,
//       fill: 'forwards'
//     }
//   );
// }