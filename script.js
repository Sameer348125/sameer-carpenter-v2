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
