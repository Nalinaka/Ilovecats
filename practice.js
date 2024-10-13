const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_r8DHmCxxYvVXRGMgQVkWvHxVmXxtPPt8LtT2VelnAy8sCHlfVdErypSbmiFa5Fgv"
let storedWeight = []

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
   
   //filter to only include those with an `image` object
   data = data.filter(img=> img.image?.url!=null)
   
  storedWeight = data;
   
   for (let i = 0; i < storedWeight.length; i++) {
    const breed = storedWeight[i];
    let option = document.createElement('option');
     
     //skip any breeds that don't have an image
     if(!breed.storedWeight)continue
     
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
  
  document.getElementById("breed_json").textContent= storedBreeds[index].weight
  
  
  document.getElementById("wiki_link").href= storedBreeds[index].wikipedia_url
  document.getElementById("wiki_link").innerHTML= storedBreeds[index].wikipedia_url
}



// const url = `https://api.thecatapi.com/v1/images/search?limit=100`;
// const api_key = "live_r8DHmCxxYvVXRGMgQVkWvHxVmXxtPPt8LtT2VelnAy8sCHlfVdErypSbmiFa5Fgv"


// async function getData () {
//  return await fetch('https://api.thecatapi.com/v1/images/search?limit=100')
// .then(response => response.json())
// .then(data => {
//   console.log(data) 
//   return data;
//   // always console log variables that are accessible      
// })
// .catch((error) => console.error('Error:', error));
// }

// async function filterData () { 
// let breed = await getData () 
// let temperament = await getData ()

// // calling the data
// console.log(breed)

//   const sortedData1 = breed.sort((a, b) => a.breed - b.breed);

//   const sortedData2 = temperament.sort((a, b) => a.temperament - b.temperament);

//   console.log(sortedData1);
//   console.log(sortedData2);

// };

// void filterData ()

   
// //    for (let i = 0; i < storedMeasurements.length; i++) {
// //     const breed = storedMeasurements[i];
// //     let option = document.createElement('option');
     
// //      //skip any breeds that don't have an image
// //      if(!breed.image)continue
     
// //     //use the current array index
// //     option.value = i;
// //     option.innerHTML = `${breed.storedMeasurements}`;
// //     document.getElementById('breed_selector').appendChild(option);
    
// //     }
// //    //show the first breed by default
// //    showBreedImage(0)

// // .catch(function(error) {
// //    console.log(error);
// // });

// // function showBreedImage(index)
// // { 
// //   document.getElementById("breed_image").src= storedMeasurements[index].image.url;
  
// //   document.getElementById("breed_json").textContent= storedMeasurements[index].temperament
  
  
// //   document.getElementById("wiki_link").href= storedMeasurements[index].wikipedia_url
// //   document.getElementById("wiki_link").innerHTML= storedMeasurements[index].wikipedia_url
// // }

// // document.getElementById("wiki_link").href= storedBreeds[index].wikipedia_url
// // document.getElementById("wiki_link").innerHTML= storedBreeds[index].wikipedia_url
