const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_r8DHmCxxYvVXRGMgQVkWvHxVmXxtPPt8LtT2VelnAy8sCHlfVdErypSbmiFa5Fgv"
let storedBreeds = []

 fetch(url, {
  
  headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
   
  
storedBreeds = data.filter(breed => breed.image?.url!=null);

  // this is for the sort filter drop down
  updatedBreedSelector = (storedBreeds);

  // This shows the first breed by default
  showBreedImage(0);

})
.catch((error)=> {
console.log(error);

});

// UP UNTIL LINE 29 FETCHES THE DATA
function updatedBreedSelector(breeds) {
  const breedSelector = document.getElementById('breed_selector');
  breedSelector.innerHTML = '';

  breeds.forEach((breed, index) => {
    let option =  document.createElement('option');
    option.value = index;
    option.innerHTML = `${breed.name}`;
    breedSelector.appendChild(option);
  });
}
     
// This part is allowing me to filter my sort dropdown into these different options
function showBreedImage(index) {
  const breed = storedBreeds[index];
  document.getElementById("breed_image").src = breed.image.url;
  document.getElementById("breed_json").textContent = `Temperament: ${breed.temperament || "No description available"}`;
  document.getElementById("breed_weight").textContent = `Weight: ${breed.weight?.imperial || "N/A"} lbs`;
  document.getElementById("breed_height").textContent = `Height: ${breed.height?.imperial || "N/A"} inches`;
}

// This adds the even Listener

document.getElementById('cat__form').addEventListener('submit', (e) => {
    e.preventDefault();

    const sortSelector  = document.getElementById('sort-selector').value;

    // This code is how it sorts from the selected array
    if (sortSelector === 'breed') { 
        storedBreeds.sort((a, b) => a.name.localeCompare(b.name));  
    } else if (sortSelector === 'height') {
        storedBreeds.sort((a, b) => (a.height?.imperial || 0) - (b.height?.imperial || 0));
    } else if (sortSelector === 'weight') {
        storedBreeds.sort((a, b) => (a.weight?.imperial || 0) - (b.weight?.imperial || 0));
    }

    // Shows the first breed after sorting
    updatedBreedSelector(storedBreeds);
    showBreedImage(0);
});

// This is when breed is selected from drop down
document.getElementById('breed_selector').addEventListener('change', (e) => {
  const selectedIndex = e.target.value;
  showBreedImage(selectedIndex);
});

