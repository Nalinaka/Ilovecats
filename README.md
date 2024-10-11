# Ilovecats

This is additional code I had for index.js:


// **************************************************************************************


 //filter to only include those with an `image` object

  //  data = data.filter(img=> img.image?.url!=null)
  // storedBreeds = data;

  //  for (let i = 0; i < storedBreeds.length; i++) {
  //   const breed = storedBreeds[i];
  //   let option = document.createElement('option');

      //skip any breeds that don't have an image
      // if(!breed.image)continue
     
      //use the current array index
      // option.value = i;
      // option.innerHTML = `${breed.name}`;
      // document.getElementById('breed_selector').appendChild(option);
      
      // }
     //show the first breed by default
  //    showBreedImage(0)
  // })
  // .catch(function(error) {
  //    console.log(error);
  // });
  
// INBETWEEN IS THE CODE FROM LINE 44 TO 64

//   for (let i = 0; i < storedBreeds.length; i++) {
//     const breed = storedBreeds[i];
//     let option = document.createElement('option');
//     option.value = i;
//     option.innerHTML = `${breed.name}`;
//     breedSelector.appendChild(option);
// }

// showBreedImage(0);

// // When you want update the breed selector with the sorted breeds (from dropdown)
// const breedSelector = document.getElementById('breed_selector');
// breedSelector.innerHTML = '';

// ******************************************************************************************************

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


**************************************************************************************


