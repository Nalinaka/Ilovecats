let isModalOpen = false; 
let contrastToggle = false; 
const scaleFactor = 1/20; 

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i=0; i < shapes.length; i++) {
    const isOdd = i % 2 === 0;
    const boolInt = isOdd? -1 : 1;
    // ROTATION
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)` 
}

}

// THIS CODE ALLOWS YOU TO TOGGLE DARK AND LIGHT ON THE SITE WHEN CLICKING THAT CIRCLE ICON ON RIGHT
function toggleContrast() {
  contrastToggle = !contrastToggle; 
  if (contrastToggle) {
      document.body.classList += " dark-theme"
  }
  else {
      document.body.classList.remove("dark-theme")
  }
}

// THIS CODE DISPLAYS THE CONTACT FORM AND ALLOWS YOU TO SUBMIT CONTACT FORM
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_nmjm2wt",
      "template_nypeksg",
      event.target,
      "gCwI_XisOix3B45N1"
    )
    .then((res) => { 
      console.log(res)
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch((e) => {
      console.log({ e });
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable, fix this we will. Please contact us directly on nalinionair@gmail.com"
      );
    });
}



// THIS CODE ALLOWS THE TOGGLE TO OPEN AND CLOSE FOR CONTACT FORM
function toggleModal() {
    if (isModalOpen) {
    isModalOpen = false; 
    return document.body.classList.remove("modal--open");
    }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
