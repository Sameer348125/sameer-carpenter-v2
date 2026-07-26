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
