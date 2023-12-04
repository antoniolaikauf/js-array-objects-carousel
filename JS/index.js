// array con dentro le immagini e descizioni
const images = [ 
    { image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', },
    { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', },
    { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", }, 
    { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', },
    { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', } 
];

// console.log(images);

// bottoni per cambiare l'immagine
const buttonAvanti = document.getElementById("scorrere-avanti");

const buttonIndietro= document.getElementById("scorrere-indietro");

// incremento per vedere oggetti

let upgrade=0;

// oggetto iesimo dentro all'array
let imgOggetto=images[upgrade]
oggettoImg(imgOggetto)


// creazione dell'evento click per andare avanti

buttonAvanti.addEventListener("click", function () {
    // controllo se upgadre è alla fine
    if (upgrade === images.length -1 ) {
        upgrade=0;
        // console.log(upgrade);
        oggettoImg(images[upgrade]);
    } else {
        // console.log(upgrade);
        upgrade++;
             oggettoImg(images[upgrade]);
        // console.log(upgrade)
    }         
})


// creazione dell'evento click per tornare indietro

buttonIndietro.addEventListener("click", function () {
    // controllo se upgrade è all'inizio
    if (upgrade === 0) {
        upgrade = images.length -1;
        // console.log(upgrade);
        oggettoImg(images[upgrade])
     } else {
        upgrade--;
        // console.log(upgrade);
             oggettoImg(images[upgrade])
        // console.log(upgrade);
    }
})


// funzione per display prima immagine

function oggettoImg(oggettoiesimo) {
    immagineiesima=images[upgrade]
    let card = ` <div>
        <img src="${oggettoiesimo.image}" alt="">
        <h2>
            ${oggettoiesimo.title}
        </h2>
        <p>
             ${oggettoiesimo.text}
        </p>
    </div>`
    document.getElementById("contenitore-img").innerHTML = card
}