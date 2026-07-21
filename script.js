// ==============================
// SAMEER CARPENTER WEBSITE
// ==============================

// ==============================
// LOADER
// ==============================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.style.display = "none";

        }, 1000);

    }

});

// ==============================
// HERO AUTO SLIDER
// ==============================

const heroImages = [

    "image/tv-panel-1.jpg",
    "image/tv-panel-2.jpg",
    "image/tv-panel-3.jpg",
    "image/tv-panel-4.jpg"

];

let heroIndex = 0;

const heroSlide = document.getElementById("slide");

if (heroSlide) {

    setInterval(function () {

        heroIndex++;

        if (heroIndex >= heroImages.length) {

            heroIndex = 0;

        }

        heroSlide.src = heroImages[heroIndex];

    }, 3000);

}// ==============================
// SCROLL GALLERY
// ==============================

const scrollGallery = document.getElementById("scrollGallery");
const scrollContainer = document.getElementById("scrollContainer");
const closeScroll = document.getElementById("closeScroll");

// ==============================
// GALLERY DATA
// ==============================

const galleryData = {

    "TV Panel":[
        "image/tv-panel-1.jpg",
        "image/tv-panel-2.jpg",
        "image/tv-panel-3.jpg",
        "image/tv-panel-4.jpg"
    ],

    "Modular Kitchen":[
        "image/download.webp",
        "image/download (1).webp"
    ],

    "Wardrobe":[
        "image/images (12).jpeg",
        "image/images (19).jpeg"
    ],

    "Wooden Door":[
        "image/images (10).jpeg",
        "image/images (11).jpeg"
    ],

    "Wooden Furniture":[
        "image/modern-furniture-1.jpg",
        "image/modern-furniture-2.jpg"
    ]

};
// ==============================
// SERVICE CARD CLICK
// ==============================

document.querySelectorAll(".card").forEach(function(card){

    card.addEventListener("click",function(){

        const title = this.querySelector("h3").innerText;

        if(!galleryData[title]) return;

        scrollContainer.innerHTML = "";

        galleryData[title].forEach(function(img){

            const image = document.createElement("img");
            image.src = img;
            image.alt = title;
            scrollContainer.appendChild(image);

        });

        scrollGallery.style.display = "block";

    });

});

// ==============================
// CLOSE GALLERY
// ==============================

closeScroll.addEventListener("click",function(){

    scrollGallery.style.display = "none";
    scrollContainer.innerHTML = "";

});

scrollGallery.addEventListener("click",function(e){

    if(e.target === scrollGallery){

        scrollGallery.style.display = "none";
        scrollContainer.innerHTML = "";

    }

});
