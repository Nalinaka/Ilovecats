const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_r8DHmCxxYvVXRGMgQVkWvHxVmXxtPPt8LtT2VelnAy8sCHlfVdErypSbmiFa5Fgv";
let animalData = [];

async function main() {
    await fetchAnimalData(); 
    setupSortSelector(); // Setup sorting functionality
}

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

        animalData = await response.json();
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