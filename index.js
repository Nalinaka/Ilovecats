
const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_r8DHmCxxYvVXRGMgQVkWvHxVmXxtPPt8LtT2VelnAy8sCHlfVdErypSbmiFa5Fgv"
let storedBreeds = []

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
   
   //filter to only include those with an `image` object
   data = data.filter(img=> img.image?.url!=null)
   
  storedBreeds = data;
   
   for (let i = 0; i < storedBreeds.length; i++) {
    const breed = storedBreeds[i];
    let option = document.createElement('option');
     
     //skip any breeds that don't have an image
     if(!breed.image)continue
     
    //use the current array index
    option.value = i;
    option.innerHTML = `${breed.name}`;
document.getElementById('breed_selector').appendChild(option);
    
    }
   //show the first breed by default
   showBreedImage(0)
})
.catch(function(error) {
   console.log(error);
});

function showBreedImage(index)
{ 
  document.getElementById("breed_image").src= storedBreeds[index].image.url;
  
  document.getElementById("breed_json").textContent= storedBreeds[index].temperament
}



// const catsListEl = document.querySelector(".cat-list");

// async function getCat() {
//   const cats = await fetch("https://api.thecatapi.com/v1/images/search?api_key=live_r8DHmCxxYvVXRGMgQVkWvHxVmXxtPPt8LtT2VelnAy8sCHlfVdErypSbmiFa5Fgv");
//   const catsData = await cats.json();

//   //   the map function below converts user data from the backend API into html so it can be viewed
//   catsListEl.innerHTML = catsData.map ((cats) => catsHTML(cats)).join("");
// }

// getCat();

// function showCatsPosts(id) {
//     localStorage.setItem("catsId", id);
//   window.location.href = `${window.location.origin}/cats.html`
// }

// // window.location.href = re routes to a new page
// // You can see local storage under inspect and application

// function catsHTML(cats) {
//   return `<div class="user-card" onclick="showCatsPosts(${cats.id}">
//     <div class="user-card__container">
//         <h3>${cats.id}</h3>
//         <p>
//             <b>Width:</b> ${cats.width}
//         </p>
//         <p>
//             <b>Height:</b> ${cats.height}
//         </p>
//         <p>
//             <b>Website:</b>{" "}
//             <a href="https://${cats.website}" target="_blank">
//                 ${cats.website}
//             </a>
//         </p>
//     </div>
// </div>;`;
// }


