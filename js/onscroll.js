//Transforming the header to a smaller version on scroll

const header = document.querySelector(".header-wrapper");
const logo = document.querySelector(".header-logo");
const logoContainer = document.querySelector("#logoContainer");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    logoContainer.style.background = "none";
    logoContainer.style.minHeight = "fit-content";
    logo.src = "/img/logos/icon_only/odd-tops_logo_color_icon-only.png";
    logo.width = "75";
    header.style.maxHeight = "55";
    header.style.display = "flex";
  } else {
    logoContainer.style.background = "";
    logoContainer.style.minHeight = "";
    logo.src = "/img/logos/25percent_cropped/odd-tops_logo_color-25.png";
    logo.width = "350";
    header.style.display = "block";
  }
}
