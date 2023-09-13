const url = "https://christerolsen.com/odd-tops/wp-json/wp/v2/posts";

const postContainer = document.querySelector("#post-content");
const changeHtmlTitle = document.querySelector(".changeHtmlTitle");

const loader = document.querySelector(".loader");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const include = "?include=";
const id = params.get("id");

const apiURL = url + include + id + "&_embed";

async function fetchPost() {
  try {
    const response = await fetch(apiURL);
    const details = await response.json();

    console.log(details);

    createHTML(details);
  } catch (error) {
    console.log(error, "Error fetching API");
  }
}

fetchPost();

function createHTML(details) {
  loader.style = "display:none;";

  const postTitle = `${details[0].title.rendered}`;
  const postFeaturedMediaSrc = `${details[0]._embedded["wp:featuredmedia"][0].source_url}`;
  const postFeaturedMediaAltText = `${details[0]._embedded["wp:featuredmedia"][0].alt_text}`;
  const postContent = `${details[0].content.rendered}`;

  const htmlTitle = `Odd Tops | ${postTitle}`;
  const content = `
    <h1>${postTitle}</h1>
    ${postContent}
    <img
      id="img1"
      class="post-featured-media"
      src="${postFeaturedMediaSrc}"
      alt="${postFeaturedMediaAltText}"
      onclick=""/>
  `;

  changeHtmlTitle.innerHTML = htmlTitle;
  postContainer.innerHTML = content;

  //Creating modal-image when onclick
  const modal = document.querySelector("#modal");
  const img1 = document.querySelector("#img1");
  const modalImg = document.querySelector("#modal-image");
  const caption = document.querySelector("#caption");

  img1.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    caption.innerHTML = this.alt;
  };

  modal.onclick = function () {
    modal.style.display = "none";
  };
  //console.log(details[0].content.rendered);
}

//<img class="featured-img" src="${details[0]._embedded["wp:featuredmedia"][0].source_url}" alt="${details[0]._embedded["wp:featuredmedia"][0].alt_text}"/>
