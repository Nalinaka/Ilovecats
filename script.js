// // https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_r8DHmCxxYvVXRGMgQVkWvHxVmXxtPPt8LtT2VelnAy8sCHlfVdErypSbmiFa5Fgv&breed_ids=beng
// // https://api.thecatapi.com/v1/images/search
// // https://api.thecatapi.com/v1/images/search?limit=100


// // default cat List
// let thecatapi
// let currentQuery = 'everything';
// let isModalOpen = false;
// const apiKey = 'live_r8DHmCxxYvVXRGMgQVkWvHxVmXxtPPt8LtT2VelnAy8sCHlfVdErypSbmiFa5Fgv'; // Your API key

// // Elements
// const catListEl = document.querySelector('.cat-list');
// const breedInput = document.getElementById('breedInput');
// const minHeightInput = document.getElementById('minHeightInput');
// const maxHeightInput = document.getElementById('maxHeightInput');
// const minWeightInput = document.getElementById('minWeightInput');
// const maxWeightInput = document.getElementById('maxWeightInput');
// const sortCriteria = document.getElementById('sortCriteria');



// // Default cat List
// window.addEventListener('DOMContentLoaded', async () => {
//     await fetchBreeds(); // Load initial cats
// });

// // Fetch cat information
// async function fetchBreeds(query = currentQuery) {
//     try {
//         const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&api_key=${apiKey}&breed_ids=${query}`);
//         currentBreeds = await response.json();
//         displayCats(currentBreeds);
//     } catch (error) {
//         console.error('Error fetching breeds:', error);
//     }
// }

// // Display the cats in the UI
// function displayCats(breeds) {
//     catListEl.innerHTML = ''; 
//     cats.forEach(breed => {
//         const catDiv = document.createElement('div');
//         catDiv.classList.add('cat-item');
//         catDiv.innerHTML = `
//             <h3>${breed.name}</h3>
//             <p>Weight: ${breed.weight.imperial} lbs</p>
//             <p>Height: ${breed.height.imperial} inches</p>
//             <img src="${breed.image.url}" alt="${breed.name} Cat" class="cat-image">
//         `;
//         catListEl.appendChild(catDiv);
//     });
// }

// // Filter cats based on input criteria
// function filterCats() {
//     const breed = breedInput.value.trim().toLowerCase();
//     const minHeight = minHeightInput.value ? parseInt(minHeightInput.value) : null;
//     const maxHeight = maxHeightInput.value ? parseInt(maxHeightInput.value) : null;
//     const minWeight = minWeightInput.value ? parseInt(minWeightInput.value) : null;
//     const maxWeight = maxWeightInput.value ? parseInt(maxWeightInput.value) : null;

//     const filteredCats = currentBreeds.filter(cat => {
//         const matchesBreed = !breed || cat.name.toLowerCase().includes(breed);
//         const matchesHeight = (!minHeight || cat.height.imperial >= minHeight) &&
//                               (!maxHeight || cat.height.imperial <= maxHeight);
//         const matchesWeight = (!minWeight || cat.weight.imperial >= minWeight) &&
//                               (!maxWeight || cat.weight.imperial <= maxWeight);
//         return matchesBreed && matchesHeight && matchesWeight;
//     });

//     displayCats(filteredCats); // Display filtered breeds
// }

// // Sort breeds based on selected criteria
// function sortCats(criteria) {
//     let sortedCats;

//     if (criteria === 'height') {
//         sortedCats = [...currentBreeds].sort((a, b) => a.height.imperial - b.height.imperial);
//     } else if (criteria === 'weight') {
//         sortedCats = [...currentBreeds].sort((a, b) => a.weight.imperial - b.weight.imperial);
//     }

//     displayCats(sortedCats); // Display sorted breeds
// }