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

FIND YOUR CAT HTML CODE NOT USED:



      <section id="content">
        <search id="search">
          <form id="form">
            <input type="text" placeholder="Search by breed" />
            <button type="submit" id="search-btn">Search</button>
            <p>Search by breed</p>
          </form>
        </search>
      </section>

      <!-- <section id="cats">
        <span data>
          Price range:
          <select id="Price-range">
            "$20 to $200"
          </select>
        </span>
      </section> -->

      <section id="Cat Information">
        <div class="container">
          <div class="row">
            <div class="cat-list">
              <div class="cats">
                <div class="cat-card">
                  <div class="cat-card__container">
                    <h3>Cat's Breed</h3>
                    <p><b>Sex:</b> Female or Male</p>
                    <p><b>Age:</b> 00 years</p>
                    <p>
                      <b>Website:</b>
                      <a href="https://website.website" target="_blank"
                        >website.website</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure>
          <img id="cuteCats--image-logo" src="./assets/cuteCats Logo.png" alt="logo" />
        </figure>
      </section> 


**************************************************************************************************************


