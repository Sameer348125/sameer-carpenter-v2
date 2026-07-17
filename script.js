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

});
