// // const url = `https://api.thecatapi.com/v1/breeds`;
// // const api_key = "live_r8DHmCxxYvVXRGMgQVkWvHxVmXxtPPt8LtT2VelnAy8sCHlfVdErypSbmiFa5Fgv";



async function main() {
  const response = await fetch("https://api.thecatapi.com/v1/breeds");
  const animalData = await response.json();
  const animalListEl = document.querySelector(".animal-list");

  if (animalListEl) {
    animalListEl.innerHTML = animalData
      .map((animal) => animalHTML(animal)) 
      .join(""); 
  } else {
    console.error("Element with class 'animal-list' not found");
  }
}

function animalHTML(animal) {
  return `
    <div class="animal-data">
      <h3>${animal.name}</h3>
      <p><b>Id:</b> ${animal.id}</p>
      <p><b>Weight:</b> ${animal.weight.metric} kg</p>
      <p class="description"><b>Description:</b> ${animal.description || 'No description available'}</p>
      <p class="temperament__style"><b>Temperament:</b> ${animal.temperament || 'N/A'}</p>
    </div>
  `;
}

// Call the main function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  main();
});



// Altered the below code from David taught: 

//   animalListEl.innerHTML = animalData.map((animal) => animalHTML(animal)).join("");

// // The below function - window.location.href allows you to route to a new page in JS
// function showAnimalPosts(id) {
//   localStorage.setItem("id", id);
//   window.location.href = `${window.location.origin}/index.html`

// }