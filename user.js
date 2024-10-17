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

// async function renderAnimals(id) {
//   const animal = await fetch (`https://api.thecatapi.com/v1/images/search?limit=100=api_key=live_r8DHmCxxYvVXRGMgQVkWvHxVmXxtPPt8LtT2VelnAy8sCHlfVdErypSbmiFa5Fgv${id}`)
//   const animalData = await animal.json();
//   console.log(animalData)
//   const animalListEl = document.querySelector('.animal-list'); // make sure you have this element in your HTML
//   if (animalListEl) {
//       animalListEl.innerHTML = animalData.map(animal => animalHTML(animal)).join('');
//   } else {
//       console.error('animalListEl not found');
//   }
// }


function postHTML (animal) {
  return `<div class="breed__temperament--cat">
${animal.temperament}
    <a id="wiki_link" target="_blank">
    <a href="#wiki-link" class= "wiki_link" target="_blank"></a>
    </a>
    <div id="animal_id"></div>
    ${animal.id}
    </div>
    <div class="breed__image--cat">
    <img id="breed_image">
    ${animal.image}
    </div>`
}

renderAnimals (id);



