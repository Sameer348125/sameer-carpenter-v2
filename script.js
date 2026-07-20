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

}
