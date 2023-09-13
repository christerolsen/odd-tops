const url = "https://christerolsen.com/odd-tops/wp-json/wp/v2/posts?_embed";

const perPage = "&per_page=";
const perPageNr = "100";

const apiUrl = url + perPage + perPageNr;

const blogList = document.querySelector("#blogList");
const loadMoreButton = document.querySelector(".load-more-button");

function loadMore() {
  //Load more
  let currentAm = 10;

  loadMoreButton.onclick = function () {
    let posts = document.querySelectorAll("#blogList a");

    for (let i = currentAm; i < currentAm + 9; i++) {
      posts[i].style.display = "block";
    }
    currentAm += 10;
    if (currentAm >= posts.length) {
      loadMoreButton.style.display = "none";
    }
  };
}

async function getResults() {
  try {
    const response = await fetch(apiUrl);
    const result = await response.json();
    blogList.innerHTML = "";

    console.log(result);

    result.forEach(function (post) {
      blogList.innerHTML += `
      <a href="/pages/post.html?id=${post.id}">
        <div 
          class="blogPost"
          style="background-image:
            url(${post._embedded["wp:featuredmedia"][0].source_url})" 
          alt="${post._embedded["wp:featuredmedia"][0].alt_text}">
          <div class="postTitle">
            <h3>${post.title.rendered}</h3>
          </div>
        </div>
      </a>`;
    });

    loadMore();

    //Filter
    const radioButtons = document.querySelectorAll("#radio-btn");

    const catSimple = result.filter(
      (post) => post._embedded["wp:term"][0][0].name === "Simple"
    );
    const catMedium = result.filter(
      (post) => post._embedded["wp:term"][0][0].name === "Medium"
    );
    const catDemanding = result.filter(
      (post) => post._embedded["wp:term"][0][0].name === "Demanding"
    );

    const readioBtn1 = document.querySelector("#radio-btn1");
    const readioBtn2 = document.querySelector("#radio-btn2");
    const readioBtn3 = document.querySelector("#radio-btn3");
    const readioBtn4 = document.querySelector("#radio-btn4");

    readioBtn1.addEventListener("change", function () {
      blogList.innerHTML = "";
      loadMoreButton.style.display = "block";

      result.forEach(function (post) {
        blogList.innerHTML += `
      <a href="/pages/post.html?id=${post.id}">
        <div 
          class="blogPost"
          style="background-image:
            url(${post._embedded["wp:featuredmedia"][0].source_url})" 
          alt="${post._embedded["wp:featuredmedia"][0].alt_text}">
          <div class="postTitle">
            <h3>${post.title.rendered}</h3>
          </div>
        </div>
      </a>`;
      });

      loadMore();
    });

    readioBtn2.addEventListener("change", function () {
      blogList.innerHTML = "";
      loadMoreButton.style.display = "none";

      catSimple.forEach(function (post) {
        blogList.innerHTML += `
      <a href="/pages/post.html?id=${post.id}">
        <div 
          class="blogPost"
          style="background-image:
            url(${post._embedded["wp:featuredmedia"][0].source_url})" 
          alt="${post._embedded["wp:featuredmedia"][0].alt_text}">
          <div class="postTitle">
            <h3>${post.title.rendered}</h3>
          </div>
        </div>
      </a>`;
      });
    });

    readioBtn3.addEventListener("change", function () {
      blogList.innerHTML = "";
      loadMoreButton.style.display = "none";

      catMedium.forEach(function (post) {
        blogList.innerHTML += `
      <a href="/pages/post.html?id=${post.id}">
        <div 
          class="blogPost"
          style="background-image:
            url(${post._embedded["wp:featuredmedia"][0].source_url})" 
          alt="${post._embedded["wp:featuredmedia"][0].alt_text}">
          <div class="postTitle">
            <h3>${post.title.rendered}</h3>
          </div>
        </div>
      </a>`;
      });
    });

    readioBtn4.addEventListener("change", function () {
      blogList.innerHTML = "";
      loadMoreButton.style.display = "none";

      catDemanding.forEach(function (post) {
        blogList.innerHTML += `
      <a href="/pages/post.html?id=${post.id}">
        <div 
          class="blogPost"
          style="background-image:
            url(${post._embedded["wp:featuredmedia"][0].source_url})" 
          alt="${post._embedded["wp:featuredmedia"][0].alt_text}">
          <div class="postTitle">
            <h3>${post.title.rendered}</h3>
          </div>
        </div>
      </a>`;
      });
    });
    //

    //

    //
  } catch (error) {
    console.log(error, "Error fetching API");
  }
}

getResults();
