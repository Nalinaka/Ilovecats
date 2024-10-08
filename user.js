console.log();

const postListEl = document.querySelector(".post-list");
const id = localStorage.getItem("catsId");

async function onSearchChange(event) {
  const id = event.target.value;
  renderPosts(id);
}

async function renderPosts(id) {
  const posts = await fetch(
    `https://api.thecatapi.com/v1/images/search?api_key=live_r8DHmCxxYvVXRGMgQVkWvHxVmXxtPPt8LtT2VelnAy8sCHlfVdErypSbmiFa5Fgv`

    // `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${id}`

  );
  const postsData = await posts.json();
  postListEl.innerHTML = postsData.map((post) => postHTML(post)).join("");
}
function postHTML(post) {
  return ` <div class="post">
        <div class="post__title">
          ${post.title}
        </div>
        <p class="post__body">
          ${post.body}
        </p>
      </div>`;
}

renderPosts(id);
