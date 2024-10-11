const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_r8DHmCxxYvVXRGMgQVkWvHxVmXxtPPt8LtT2VelnAy8sCHlfVdErypSbmiFa5Fgv";
let storedBreeds = [];

// Fetching the breed data
fetch(url, {
  headers: {
    'x-api-key': api_key
  }
})
  .then((response) => response.json())
  .then((data) => {
    // Filter breeds to only include those with an image
    storedBreeds = data.filter(breed => breed.image?.url != null);

    // Update breed selector with all breeds initially
    updatedBreedSelector(storedBreeds);

    // Show the first breed's image by default
    showBreedImage(0);
  })
  .catch((error) => {
    console.log(error);
  });

// Function to update the breed selector
function updatedBreedSelector(breeds) {
  const breedSelector = document.getElementById('breed_selector');
  breedSelector.innerHTML = '';

  breeds.forEach((breed, index) => {
    let option = document.createElement('option');
    option.value = index;
    option.innerHTML = `${breed.name}`;
    breedSelector.appendChild(option);
  });
}

// Function to display the breed image and temperament
function showBreedImage(index) {
  const breed = storedBreeds[index];
  document.getElementById("breed_image").src = breed.image.url;
  document.getElementById("breed_json").textContent = breed.temperament || "No description available";
}

// Add event listener for the sort form submission
document.getElementById('sort__form').addEventListener('submit', (e) => {
  e.preventDefault();

  const sortSelector = document.getElementById('sort-selector').value;

  // Sort based on the selected criteria (breed, height, weight)
  if (sortSelector === 'breed') {
    storedBreeds.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortSelector === 'height') {
    storedBreeds.sort((a, b) => {
      // Parse height (assuming imperial format like "9 - 11 inches")
      const heightA = parseFloat(a.height?.imperial?.split(" - ")[0]) || 0;
      const heightB = parseFloat(b.height?.imperial?.split(" - ")[0]) || 0;
      return heightA - heightB;
    });
  } else if (sortSelector === 'weight') {
    storedBreeds.sort((a, b) => {
      // Parse weight (assuming imperial format like "7 - 12 lbs")
      const weightA = parseFloat(a.weight?.imperial?.split(" - ")[0]) || 0;
      const weightB = parseFloat(b.weight?.imperial?.split(" - ")[0]) || 0;
      return weightA - weightB;
    });
  }

  // Update the breed selector with the sorted breeds
  updatedBreedSelector(storedBreeds);

  // Show the first breed after sorting
  showBreedImage(0);
});

// Event listener to show the selected breed's image
document.getElementById('breed_selector').addEventListener('change', (e) => {
  const selectedIndex = e.target.value;
  showBreedImage(selectedIndex);
});

