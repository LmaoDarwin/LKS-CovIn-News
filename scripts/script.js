const nav = document.getElementById("navbar");
const mainBg = document.getElementById("mainBg");
const snap = document.getElementsByClassName("snap");

//nav js
document.addEventListener("scroll", () => {
  if (this.scrollY == 0) {
    nav.classList.remove("scrolled");
  }
  if (this.scrollY > 1) {
    nav.classList.add("scrolled");
  }
});
//end nav js

//Snap scroll
const basePx = 940
let childOfSnap = snap.item(0).children.length - 3 //<< 3 for button excluded + offset basePx
const snapPx = basePx * childOfSnap
let coord = 0;
let autoScroll;
function getAutoScroll() {
  if (!autoScroll) {
    return (autoScroll = setInterval(() => {
      console.log({coord,childOfSnap,snapPx,autoScroll,num:(940*4)});
      if (coord >= snapPx) {
        coord = -basePx;
      }
      snap.item(0).scrollTo((coord += basePx), 0);
    }, 3000));
  }
}
function buttonScroll(nodeNumer, orien) {
  orien == "right" && snap.item(nodeNumer).scrollTo((coord += basePx), 0);
  orien == "left" && snap.item(nodeNumer).scrollTo((coord -= basePx), 0);
  if (coord <= 0) coord = 0;
  if (coord >= snapPx) {
    coord = snapPx;
    return true;
  }
  clearInterval(autoScroll);
  autoScroll = null;
  setTimeout(() => getAutoScroll(), 10000);
}
getAutoScroll();
//end snap scroll
