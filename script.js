// =========================
// LOADER
// =========================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(function () {
            loader.style.display = "none";
        }, 1200);
    }

});

// =========================
// HERO TV PANEL AUTO SLIDER
// =========================

const images = [

    "image/tv-panel-1.jpg",
    "image/tv-panel-2.jpg",
    "image/tv-panel-3.jpg",
    "image/tv-panel-4.jpg"

];

let index = 0;

const slide = document.getElementById("slide");

if (slide) {

    setInterval(function () {

        index++;

        if (index >= images.length) {
            index = 0;
        }

        slide.src = images[index];

    }, 3000);

}

// =========================
// GALLERY LIGHTBOX
// =========================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

if (lightbox && lightboxImg && closeBtn) {

    document.querySelectorAll(".gallery-box img").forEach(function (img) {

        img.addEventListener("click", function () {

            lightbox.style.display = "flex";

            lightboxImg.src = this.src;

        });

    });

    closeBtn.addEventListener("click", function () {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", function (e) {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}

// =========================
// WHATSAPP FORM
// =========================

const form = document.querySelector(".contact form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value;
        const mobile = form.querySelector('input[type="tel"]').value;
        const work = form.querySelector("textarea").value;

        const message =
            "Hello Sameer Carpenter%0A%0A" +
            "Name : " + name + "%0A" +
            "Mobile : " + mobile + "%0A" +
            "Requirement : " + work;

        window.open(
            "https://wa.me/919756031755?text=" + message,
            "_blank"
        );

    });

}
// =========================
// SERVICE CARD CLICK
// =========================

document.querySelectorAll(".card").forEach(function(card){

    card.addEventListener("click",function(){

        const title=this.querySelector("h3").innerText;

        alert(title + " Gallery will be available here.");

    });

});

// =========================
// IMAGE HOVER EFFECT
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

document.querySelectorAll(".card").forEach(function(card){

    card.addEventListener("click",function(){

        const title = this.querySelector("h3").innerText;

        console.log(galleryData[title]);

    });

});


// =========================
// SMOOTH PAGE ANIMATION
// =========================

const observer=new IntersectionObserver(function(entries){

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
// END
// =========================
