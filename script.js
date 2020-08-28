let position = 0;
const slidesToShow = 1,
  slidesToScroll = 1,
  wrapper = document.querySelector(".wrapper"),
  container = wrapper.querySelector(".slider-container"),
  track = wrapper.querySelector(".slider-track"),
  // item = wrapper.querySelector(".slider-item"),
  items = wrapper.querySelectorAll(".slider-item"),
  itemsCount = items.length,
  btnPrev = wrapper.querySelector(".ptn-prev"),
  btnNext = wrapper.querySelector(".ptn-next"),
  itemWidth = container.clientWidth / slidesToShow,
  movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener("click", () => {
  const itemsLeft =
    itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPositions();
  checkBtns();
});

btnPrev.addEventListener("click", () => {
  const itemsLeft = Math.abs(position) / itemWidth;
  position +=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPositions();
  checkBtns();
});

const setPositions = () => {
  track.style.transform = `translateX(${position}px)`;
};
const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};
checkBtns();
