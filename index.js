const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_r8DHmCxxYvVXRGMgQVkWvHxVmXxtPPt8LtT2VelnAy8sCHlfVdErypSbmiFa5Fgv";
let animalData = [];

async function main() {
    await fetchAnimalData(); 
    setupSortSelector(); // Setup sorting functionality
}

// This code is to pull the cat data and display it in the filter button
// // First you need to fetch the API to send a request to your API endpoint 
async function fetchAnimalData() {
    try {
        const response = await fetch(url, {
            headers: {
                'x-api-key': api_key
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

      const animalData = await response.json();
      console.log(animalData)
        renderAnimals(animalData); // Render unsorted data initially
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function renderAnimals(data) {
    const animalListEl = document.querySelector(".animal-list");
    animalListEl.innerHTML = data
        .filter(animal => animal.image?.url && animal.weight?.metric) // Ensure both image and weight exist
        .map(animal => animalHTML(animal))
        .join("");
}

function animalHTML(animal) {
    return `
        <div class="animal-data">
            <h3>${animal.name}</h3>
            <p><b>Id:</b> ${animal.id}</p>
            <p><b>Weight:</b> ${animal.weight.metric} kg</p>
            <p class="description"><b>Description:</b> ${animal.description || 'No description available'}</p>
            <p class="temperament__style"><b>Temperament:</b> ${animal.temperament || 'N/A'}</p>
            <img src="${animal.image?.url}" alt="${animal.name}">
            <button onclick="showAnimalPosts('${animal.id}')">View More</button>
        </div>
    `;
}

function setupSortSelector() {
    const sortSelector = document.getElementById("sort-selector");

    // Event listener for sorting selection
    sortSelector.addEventListener('change', (event) => {
        const selectedValue = event.target.value;

        let sortedData;
        if (selectedValue === 'sort-low-high') {
            sortedData = [...animalData].sort((a, b) => {
                return parseFloat(a.weight.metric) - parseFloat(b.weight.metric);
            });
        } else if (selectedValue === 'sort-high-low') {
            sortedData = [...animalData].sort((a, b) => {
                return parseFloat(b.weight.metric) - parseFloat(a.weight.metric);
            });
        } else {
            // If 'Name' is selected, sort alphabetically
            sortedData = [...animalData].sort((a, b) => a.name.localeCompare(b.name));
        }

        renderAnimals(sortedData);
    });
}


// This next section of code is for searching breed and displaying
// It staerts with a function - the section in HTML that has code
// for search filter has an onChange of "onSearchCat" used here to match

// I added lowercase, otherwise when entered, it will be case sensitive

 function onSearchCat(event) {
  const userInput = event.target.value.toLowerCase();
  fetchBreedData (userInput);
}

  function fetchBreedData(userInput) {
      fetch (url, { 
      headers: {
      'x-api-key': api_key
    } 
  })
  .then (response => {
    if (!response.ok) {
      throw new Error ('Breed not found');
       }
       return response.json();
       // Handle and return the response is the next 
     })
.then(data => {
  const breedData = data.filter(cat => cat.name.toLowerCase().includes(userInput) && cat.image);
  renderBreed(breedData);
})
// Catch any errors, for example breed entered not listed
.catch(error => {
  console.error("Error:", error);
});
  }

// Need to render the data now so it can display!  
function renderBreed(breedData) {
  const html = breedData.map(animal =>
   `<div class="animal-data">
     <h3>${animal.name}</h3>
     <p><b>Id:</b> ${animal.id}</p>
     <p><b>Weight:</b> ${animal.weight.metric} kg</p>
     <p class="description"><b>Description:</b> ${animal.description || 'No description available'}</p>
     <p class="temperament__style"><b>Temperament:</b> ${animal.temperament || 'N/A'}</p>
     <img src="${animal.image?.url}" alt="${animal.name}">
     <button onclick="showAnimalPosts('${animal.id}')">View More</button>
 </div>
`).join("");

// Render the HTML
document.getElementById('targetElement').innerHTML = html;
}

document.getElementById('searchInput').addEventListener('input', onSearchCat);

window.onload = animalData;
   

// Call the main function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    main();
});

function showAnimalPosts(id) {
    localStorage.setItem("id", id);
    window.location.href = `${window.location.origin}/findyourcat.html`; // Modify the page URL 
}



// Altered the below code from David taught: 

//   animalListEl.innerHTML = animalData.map((animal) => animalHTML(animal)).join("");

// // The below function - window.location.href allows you to route to a new page in JS
// function showAnimalPosts(id) {
//   localStorage.setItem("id", id);
//   window.location.href = `${window.location.origin}/index.html`

// }



// My old function
// async function fetch() {
//   try {
//     const response = await fetch(url, {
//       headers: {
//         'x-api-key': api_key
//       }
//     });

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const animalData = await response.json();
//   const animalListEl = document.querySelector(".animal-list");

//   if (animalListEl) {
//     animalListEl.innerHTML = animalData
//     .filter(animal => animal.image?.url) // Filter out animals without images
//       .map((animal) => animalHTML(animal)) 
//       .join(""); 
//   } else {
//     console.error("Element with class 'animal-list' not found");
//   }
// } catch (error) {
//   console.error("Error fetching data:", error);
// }

// if (animalListEl) {
//   renderAnimals(animalData); // displays unsorted data
//   setupSortSelector(animalData); // Allows for sorting button
// } else {
//   console.error("Element with class 'animal-list' not found");
// }

// try {
// } catch (error) {
// console.error("Error fetching data:", error);
// }}