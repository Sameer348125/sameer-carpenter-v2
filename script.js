// ===== AUTO SLIDER =====

const sliderImages = [
"image/tv-panel-1.jpg",
"image/download.webp",
"image/images (12).jpeg",
"image/images (10).jpeg",
"image/photo1.jpg",
"image/photo2.jpg"
];

let slideIndex = 0;

const slide = document.getElementById("slide");

function autoSlider() {

slideIndex++;

if (slideIndex >= sliderImages.length) {
slideIndex = 0;
}

slide.src = sliderImages[slideIndex];

}

setInterval(autoSlider, 3000);

// ===== GALLERY POPUP =====

const galleryImages = document.querySelectorAll(".gallery-box img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

galleryImages.forEach(img => {

img.onclick = () => {

lightbox.style.display = "flex";
lightboxImg.src = img.src;

};

});

closeBtn.onclick = () => {
lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
if (e.target === lightbox) {
lightbox.style.display = "none";
}
};
// ===== SCROLL ANIMATION =====

const sections = document.querySelectorAll("section");

function revealSections() {

sections.forEach(section => {

const top = section.getBoundingClientRect().top;
const screen = window.innerHeight;

if (top < screen - 100) {
section.style.opacity = "1";
section.style.transform = "translateY(0)";
}

});

}

sections.forEach(section => {

section.style.opacity = "0";
section.style.transform = "translateY(40px)";
section.style.transition = "0.8s";

});

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// ===== PRELOADER =====

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){
loader.style.display = "none";
}

});

// ===== SMOOTH SCROLL =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});
