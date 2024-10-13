const postListEl = document.querySelector('post.list');
const id= localStorage.getItem("id")

async function onSearchChange (event) {
  const id = event.target.value;
  renderPosts(id)

}

async function renderPosts (id) {
    const posts = await fetch (`https://api.thecatapi.com/v1/images/search?limit=100=api_key=live_r8DHmCxxYvVXRGMgQVkWvHxVmXxtPPt8LtT2VelnAy8sCHlfVdErypSbmiFa5Fgv${id}`)
  const postsData = await posts.json();
  console.log(postsData)
  if (animalListEl) {
  postListEl.innerHTML = postsData.map(post => postHTML(post)).join ('');
}}

function postHTML (post) {
  return `<div class="breed__temperament--cat">
${post.temperament}
    <a id="wiki_link" target="_blank">
    <a href="#wiki-link" class= "wiki_link" target="_blank"></a>
    </a>
    <div id="animal_id"></div>
    ${post.id}
    </div>
    <div class="breed__image--cat">
    <img id="breed_image">
    ${post.image}
    </div>`
}

renderPosts (id);



// {/* <form id="sort__form">
// <select id="sort-selector">
//   <option value="Name">Filter by Name</option>
//   <option value="weight">Filter by Weight</option>
//   <select onchange="showBreedImage(event)" name="breed_selector" id="breed_selector">
//     <div class="breed__image--cat">
//       <img id="breed_image">
//   </div> 
//   </select> */}



// {/* // const breedListEl = document.querySelector(".animal-list");
// // const id = localStorage.getItem("id");

// // async function onSearchChange(event) { */}
// {/* //   const id = event.target.value;
// //   renderPosts(id);
// // }

// // async function renderPosts(breed) { */}
// {/* //   const posts = await fetch(
// //     `https://api.thecatapi.com/v1/images/search?api_key=live_r8DHmCxxYvVXRGMgQVkWvHxVmXxtPPt8LtT2VelnAy8sCHlfVdErypSbmiFa5Fgv&breed_ids=${breed}`
// //   );
  
// //   const breedsData = await posts.json();
// //   breedListEl.innerHTML = breedsData.map((post) => catHTML(post)).join("");

// //   console.log(breedsData);
// // }
// // function animalHTML(post) { }
// /* //   return ` <div class="post">
//   // const breed = post.breeds.length > 0 ? post.breeds[0] : { name: 'Unknown Breed', temperament: 'Unknown' };
// //         <div class="post__breed">
// //           ${post.breed}
// //         </div>
// //         <p class="post__temperament">
// //           ${post.temperament}
// //         </p>
// //       </div>`;
// // }

// // renderPosts(id); */
