const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


//const arrows = document.querySelector('.arrow');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const dotsContainer = document.querySelector('.dots');
let currentSlideIndex = 0; // Pour suivre l'index de la slide actuelle





// Fonction pour créer les balles
function createDots() {
    // Pour chaque slide dans le tableau slides
    slides.forEach((slides, index) => {
		
        // Création de la balle
        const dot = document.createElement('div');
        dot.classList.add('dot');
		
		

        // Ajout des balles au conteneur
        dotsContainer.appendChild(dot);

        //  c'est le premier élément marquer comme actif
        if (index === 0) {
            dot.classList.add('dot_selected');
        }
	});
}

// Appeler la fonction pour créer les balles
createDots();


function updateSlide(index, dot) {
    // Met à jour l'image
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
    // Mettre à jour le texte
    bannerImg.nextElementSibling.innerHTML = slides[index].tagLine;
    //bannerImg.nextElementSibling.innerHTML = slides[index].dots;
	
    dot.classList.add('dot');
        /*dot.classList.add('dot');*/
        for (let i = 0; i < dot.length; i++) {  
	
    // Ajout de la classe .active au nouveau bullet point correspondant à la slide 
    dot[index].classList.add('active');
}
}

// Fonction pour gérer le clic sur la flèche droite
arrowRight.addEventListener('click', function() {
    // Met à jour l'index de la slide
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    // Met à jour l'affichage de la slide
    updateSlide(currentSlideIndex);

});

// Fonction pour gérer le clic sur la flèche gauche
arrowLeft.addEventListener('click', function() {
    // Met à jour l'index de la slide
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    // Met à jour l'affichage de la slide
    updateSlide(currentSlideIndex);
});




/*function slidesClick() {
//outeur d'événements sur la flèche gauche 
slidesClick.addEventListener('click', slidesClick);

//outeur d'événements sur les points de navigation
for (let i = 0; i < dots.length; i++) {
	dots[i].addEventListener('click', onDotClick);
}
}
// Fonction pour gérer le clic sur la flèche gauche
function onArrowLeftClick() {
   
    console.log("La flèche gauche a été cliquée !");
}

// Fonction pour gérer le clic sur la flèche droite
function onArrowRightClick() {
    
    console.log("La flèche droite a été cliquée !");
}

// écouteur d'événements sur la flèche gauche 
arrowLeft.addEventListener('click', onArrowLeftClick);

// écouteur d'événements sur la flèche droite
arrowRight.addEventListener('click', onArrowRightClick);*/
