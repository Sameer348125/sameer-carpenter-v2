// =========================
// SAMEER CARPENTER WEBSITE
// =========================

// Loader
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(function () {
            loader.style.display = "none";
        }, 1200);
    }
});

// =========================
// HERO TV PANEL SLIDER
// =========================

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

}// =========================
// GALLERY DATA
// =========================

const galleryData = {

    "TV Panel": [
        "image/tv-panel-1.jpg",
        "image/tv-panel-2.jpg",
        "image/tv-panel-3.jpg",
        "image/tv-panel-4.jpg"
    ],

    "Modular Kitchen": [
        "image/download.webp",
        "image/download (1).webp"
    ],

    "Wardrobe": [
        "image/images (12).jpeg",
        "image/images (19).jpeg"
    ],

    "Wooden Door": [
        "image/images (10).jpeg",
        "image/images (11).jpeg"
    ],

    "Wooden Furniture": [
        "image/modern-furniture-1.jpg",
        "image/modern-furniture-2.jpg"
    ]

};

// =========================
// GALLERY VARIABLES
// =========================

const popup = document.getElementById("galleryPopup");
const popupImg = document.getElementById("galleryImage");
const closeGallery = document.getElementById("closeGallery");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentImages = [];
let currentIndex = 0;
// =========================
// SERVICE CARD CLICK
// =========================

document.querySelectorAll(".card").forEach(function(card){

    card.addEventListener("click",function(){

        const title = this.querySelector("h3").innerText;

        if(!galleryData[title]) return;

        currentImages = galleryData[title];
        currentIndex = 0;

        popup.style.display = "flex";
        popupImg.src = currentImages[currentIndex];

    });

});

// =========================
// NEXT / PREVIOUS
// =========================

nextBtn.onclick = function(){

    currentIndex++;

    if(currentIndex >= currentImages.length){
        currentIndex = 0;
    }

    popupImg.src = currentImages[currentIndex];

};

prevBtn.onclick = function(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = currentImages.length - 1;
    }

    popupImg.src = currentImages[currentIndex];

};

// =========================
// CLOSE POPUP
// =========================

closeGallery.onclick = function(){

    popup.style.display = "none";

};

popup.onclick = function(e){

    if(e.target === popup){
        popup.style.display = "none";
    }

};

// =========================
// SMOOTH ANIMATION
// =========================

const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll("section").forEach(function(sec){

    observer.observe(sec);

});
// =========================
// GALLERY IMAGE ZOOM
// =========================

document.querySelectorAll(".gallery-box img").forEach(function(img){

    img.addEventListener("click",function(){

        lightbox.style.display = "flex";
        lightboxImg.src = this.src;

    });

});

closeBtn.onclick = function(){

    lightbox.style.display = "none";

};

lightbox.onclick = function(e){

    if(e.target === lightbox){
        lightbox.style.display = "none";
    }

};
