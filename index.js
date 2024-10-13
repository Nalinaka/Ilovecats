// const url = `https://api.thecatapi.com/v1/breeds`;
// const api_key = "live_r8DHmCxxYvVXRGMgQVkWvHxVmXxtPPt8LtT2VelnAy8sCHlfVdErypSbmiFa5Fgv";

const animalListEl = document.querySelector(".animal-list");

async function main () {
  const animal =  await fetch("https://api.thecatapi.com/v1/breeds");
  const animalData = await animal.json();
  animalListEl.innerHTML = animalData.map((animal) => animalHTML(animal)).join("");
}


// The below function - window.location.href allows you to route to a new page in JS
function showAnimalPosts(id) {
  localStorage.setItem("id", id);
  window.location.href = `${window.location.origin}/index.html`

}

function animalHTML(animal) {
  return    `<div class="animal-list" onclick='showAnimalPosts(${animal.id})'>
  <div class="animal-data">
  <h3>${animal.name}</h3>
  <p><b>Id:</b>${animal.id}</p>
  <p><b>Weight:</b>${animal.weight.metric}</p>
  <p><b>Description:</b>${animal.description}</p>
  <p><b>Temperament:</b>${animal.temperament}</p>
</div>`;
}


