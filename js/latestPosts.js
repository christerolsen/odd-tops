const url =
  "https://christerolsen.com/odd-tops/wp-json/wp/v2/posts?per_page=100&_embed";

const latestP = document.querySelector(".latestPosts");
const nr1FtP = document.querySelector(".big-post");
const ftP = document.querySelector(".small-post");

async function getResults() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    latestP.innerHTML = "";

    latestPHTML(result);
  } catch (error) {
    console.log(error, "Error fetching API");
  }
}

getResults();

function latestPHTML(posts) {
  posts.forEach(function (post) {
    latestP.innerHTML += `<a href="/pages/post.html?id=${post.id}">
        <div class="post" style="background-image: url(${post._embedded["wp:featuredmedia"][0].source_url})" alt="${post._embedded["wp:featuredmedia"][0].alt_text}">
          <div class="postTitle">
            <h3>${post.title.rendered}</h3>
          </div>
        </div>
      </a>`;
  });
}
