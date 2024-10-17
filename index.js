const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_r8DHmCxxYvVXRGMgQVkWvHxVmXxtPPt8LtT2VelnAy8sCHlfVdErypSbmiFa5Fgv";
let allAnimalData = []; // Store fetched animal data globally

async function main() {
    await fetchAnimalData(); 
    setupSortSelector(); // Setup sorting functionality
}

// // This code is to pull the cat data and display it in the filter button
// // // First you need to fetch the API to send a request to your API endpoint 

// This code fetches the cat data
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

        allAnimalData = await response.json(); // Save data globally
        console.log(allAnimalData);
        renderAnimals(allAnimalData); // Render unsorted data initially
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function renderAnimals(data) {
    console.log(data); 
    if (!Array.isArray(data)) {  // Debugging: Check if 'data' is an array, if not I need to add additional line of code
        console.error("Data is not an array:", data); 
        return; // need to return early if data is not an array
    }

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
            <img src="${animal.image?.url}" alt="${animal.name}">
            <p><b>Id:</b> ${animal.id}</p>
            <p><b>Weight:</b> ${animal.weight?.metric ? animal.weight.metric + ' kg' : 'Weight not available'}</p>
            <p class="description"><b>Description:</b> ${animal.description || 'No description available'}</p>
            <p class="temperament__style"><b>Temperament:</b> ${animal.temperament || 'N/A'}</p>
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
            sortedData = [...allAnimalData].sort((a, b) => {
                return parseFloat(a.weight.metric) - parseFloat(b.weight.metric);
            });
        } else if (selectedValue === 'sort-high-low') {
            sortedData = [...allAnimalData].sort((a, b) => {
                return parseFloat(b.weight.metric) - parseFloat(a.weight.metric);
            });
        } else {
            // If 'Name' is selected, sort alphabetically
            sortedData = [...allAnimalData].sort((a, b) => a.name.localeCompare(b.name));
        }

        renderAnimals(sortedData);
    });
}

// // This next section of code is for searching breed and displaying
// // It staerts with a function - the section in HTML that has code
// // for search filter has an onChange of "onSearchCat" used here to match

// // I added lowercase, otherwise when entered, it will be case sensitive

function onSearchCat() {
//     // event.preventDefault(); // This code stops the page from refreshing if you have not entered text (this was happening)

// Function for searching breed
const userInput = document.getElementById('searchInput').value.toLowerCase();

// //  filter the data based on what the user inputs
    const filteredData = allAnimalData.filter(cat =>
        cat.name.toLowerCase().includes(userInput) && cat.image
    );

    renderAnimals(filteredData); // Re-render the filtered data
}

document.getElementById('searchInput').addEventListener('input', onSearchCat);

// Call the main function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    main();
});

function showAnimalPosts(id) {
    localStorage.setItem("id", id);
    window.location.href = `${window.location.origin}/findyourcat.html`; // Modify the page URL 
}
