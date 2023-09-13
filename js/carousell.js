//Scroll posts on button click

const buttonRight = document.querySelector("button#slideRight");
const buttonLeft = document.querySelector("button#slideLeft");
const latestPosts = document.querySelector(".latestPosts");

buttonRight.onclick = function () {
  latestPosts.scrollLeft += 1080;
};

buttonLeft.onclick = function () {
  latestPosts.scrollLeft -= 1080;
};
