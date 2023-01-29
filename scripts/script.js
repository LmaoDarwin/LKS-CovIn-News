const nav = document.getElementById("navbar");
const snap = document.getElementsByClassName("snap");
const category = document.getElementById("category");
const snapId = document.getElementById("snap");

//nav js
document.addEventListener("scroll", () => {
  if (this.scrollY == 0) {
    nav.classList.remove("scrolled");
  }
  if (this.scrollY > 1) {
    nav.classList.add("scrolled");
  }
});
category.addEventListener("click", (ev) => console.log(ev));
//end nav js

//Snap scroll
//init variables:
let childOfSnap = snap.item(0).children.length - 3; //<< 3 for button excluded + offset basePx
let coord = 0;
let autoScroll;
const basePx = 990;
const snapPx = basePx * childOfSnap;
//onhover autostop:
snapId.addEventListener("mouseenter", () => clearInterval(autoScroll));
snapId.addEventListener("mouseleave", () => clearAutoScroll());
//stopper:
function clearAutoScroll() {
  clearInterval(autoScroll);
  autoScroll = null;
  setTimeout(() => getAutoScroll());
}
//starter:
function getAutoScroll() {
  if (!autoScroll) {
    return (autoScroll = setInterval(() => {
      // console.log({coord,childOfSnap,snapPx,autoScroll,num:(940*4)});
      if (coord >= snapPx) {
        coord = -basePx;
      }
      snap.item(0).scrollTo((coord += basePx), 0);
    }, 3000));
  }
}
//button onclick:
function buttonScroll(nodeNumer, orien) {
  orien == "right" && snap.item(nodeNumer).scrollTo((coord += basePx), 0);
  orien == "left" && snap.item(nodeNumer).scrollTo((coord -= basePx), 0);
  if (coord <= 0) coord = 0;
  if (coord >= snapPx) coord = snapPx;
}
getAutoScroll();
//end snap scroll
