const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// variable globale (variable dont les donn)
//const arrows = document.querySelector('.arrow');
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const dotsContainer = document.querySelector(".dots");
let currentSlideIndex = 0; // Pour suivre l'index de la slide actuelle

// Fonction pour créer les balles
function createDots() {
 

  for (let i = 0; i < slides.length; i++) {
    let index = 0;
    // Création de la balle
    const dot = document.createElement("div");
    dot.classList.add("dot");

    // Ajout des balles au conteneur
    dotsContainer.appendChild(dot);
    dot.classList.add("dot");
    //  c'est le premier élément marquer comme actif
    if (i == index) {
      dot.classList.add("dot_selected");
    }
  }
}

// Appeler la fonction pour créer les balles
createDots();

// Fonction pour mettre à jour l'affichage des points
function updateDot(index) {
    //récupérer toutes les dot quand ont veut mettre a jour
  const dots = document.querySelectorAll(".dot");
  // récupérer la dot actuellement selectionnée puis lui retirer la classe selected
  document.querySelector(".dot_selected").classList.remove("dot_selected");

  // ajouter la classe selected a la dot par rapport a l'index actuel
  dots[index].classList.add("dot_selected");
}

function updateSlide(index) {
  // Met à jour l'image
  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
  // Mettre à jour le texte
  bannerImg.nextElementSibling.innerHTML = slides[index].tagLine;
  //bannerImg.nextElementSibling.innerHTML = slides[index].dots;

 
}

// Fonction pour gérer le clic sur la flèche droite
arrowRight.addEventListener("click", function () {
  console.log("arrayDots");
  // Met à jour l'index de la slide
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  // Met à jour l'affichage de la slide
  updateSlide(currentSlideIndex);
  updateDot(currentSlideIndex);
});

// Fonction pour gérer le clic sur la flèche gauche
arrowLeft.addEventListener("click", function () {
  // Met à jour l'index de la slide
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  // Met à jour l'affichage de la slide
  updateSlide(currentSlideIndex);
  // Met à jour l'affichage du point
  updateDot(currentSlideIndex);
});