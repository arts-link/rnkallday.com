import { VFX } from "https://esm.sh/@vfx-js/core";
class NavigationEffect {
  constructor(navigation) {
    this.previous = null;
    this.current = null;
    this.navigation = navigation;
    this.anchors = this.navigation.querySelectorAll("a");
    this.vfx = this.vfx = new VFX();
    this.handleCurrent(this.anchors[0]);

    this.anchors.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        this.handlePrevious();
        this.handleCurrent(anchor);
      });
    });
  }

  handleCurrent(current) {
    this.current = current;
    this.current.classList.toggle("active");
    this.vfx.add(this.current, { shader: "rgbShift", overflow: 100 });
  }

  handlePrevious() {
    this.previous = document.querySelector(".active");
    if (this.previous) {
      this.vfx.remove(this.current);
      this.previous.classList.toggle("active");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new NavigationEffect(document.querySelector("nav"));
});