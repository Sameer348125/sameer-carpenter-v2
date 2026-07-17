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

}
