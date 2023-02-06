const nav = document.getElementById("navbar");
const category = document.getElementById("category");
let snapId = document.getElementById("snap");
//<<< nav js >>>
document.addEventListener("scroll", () => {
  if (this.scrollY == 0) {
    nav.classList.remove("scrolled");
  }
  if (this.scrollY > 1) {
    nav.classList.add("scrolled");
  }
});
category.addEventListener("click", () => {
  nav.children.item(2).classList.toggle("show");
});
//<<< end nav js >>>

//<<< Snap scroll >>>
//init variables:
let BASEPX = snapId.clientWidth;
let PX_TO_SCROLL = snapId.scrollWidth - snapId.clientWidth;
let coord = 0;
let autoScroll;
//onhover autostop:
snapId.parentNode.addEventListener("mouseenter", () =>
  clearInterval(autoScroll)
);
snapId.parentNode.addEventListener("mouseleave", () => stopAutoScroll());
function stopAutoScroll() {
  clearInterval(autoScroll);
  autoScroll = null;
  startAutoScroll();
}
function startAutoScroll() {
  if (!autoScroll) {
    return (autoScroll = setInterval(() => {
      if (coord >= PX_TO_SCROLL) coord = -BASEPX;
      if (coord % snapId.clientWidth !== 0) coord = -BASEPX;
      PX_TO_SCROLL = snapId.scrollWidth - snapId.clientWidth;
      BASEPX = snapId.clientWidth;
      snapId.scrollTo((coord += BASEPX), 0);
    }, 3000));
  }
}
function buttonScroll(orien) {
  orien == "right" && snapId.scrollTo((coord += BASEPX), 0);
  orien == "left" && snapId.scrollTo((coord -= BASEPX), 0);
  if (coord <= 0) coord = 0;
  if (coord >= PX_TO_SCROLL) coord = -BASEPX;
}
startAutoScroll();
//<<< end snap scroll >>>
