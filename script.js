let images = [
"image/photo1.jpg",
"image/photo2.jpg",
"image/photo3.jpg",
"image/photo4.jpg",
"image/photo5.jpg",
"image/photo6.jpg"
];

let index = 0;

let slide = document.getElementById("slide");

if(slide){

setInterval(function(){

index++;

if(index >= images.length){
index = 0;
}

slide.src = images[index];

},3000);

}document.querySelectorAll(".gallery-box img").forEach(function(img){

img.onclick = function(){

window.open(this.src,"_blank");

};

});
// ===== Lightbox =====

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".gallery-box img").forEach(function(img){

    img.addEventListener("click", function(){

        lightbox.style.display = "flex";
        lightboxImg.src = this.src;

    });

});

closeBtn.addEventListener("click", function(){

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", function(e){

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});// WhatsApp Form

const form = document.querySelector(".contact form");

form.addEventListener("submit", function(e){

e.preventDefault();

let name = form.querySelector('input[type="text"]').value;
let mobile = form.querySelector('input[type="tel"]').value;
let work = form.querySelector("textarea").value;

let message =
"Hello Sameer Carpenter%0A%0A" +
"Name: " + name + "%0A" +
"Mobile: " + mobile + "%0A" +
"Work: " + work;

window.open("https://wa.me/919756031755?text=" + message,"_blank");

});
