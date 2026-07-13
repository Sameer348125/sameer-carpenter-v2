const images = [
  "image/photo1.jpg",
  "image/photo2.jpg",
  "image/photo3.jpg",
  "image/photo4.jpg",
  "image/photo5.jpg",
  "image/photo6.jpg",
  "image/photo7.jpg"
];

// Slider
let current = 0;
const slide = document.getElementById("slide");

if (slide) {
  setInterval(() => {
    current = (current + 1) % images.length;
    slide.src = images[current];
  }, 3000);
}

// Lightbox
const galleryImages = document.querySelectorAll(".gallery-box img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
}
