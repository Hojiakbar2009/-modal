
let section_1 = document.querySelector(".section_1"),
section_2 = document.querySelector(".section_2"),
section2 = document.querySelector(".section2"),
section1 = document.querySelector(".section1"),
btn = document.querySelector(".i"),
btn1 = document.querySelector(".il"),
btn2 = document.querySelector(".ily"),
btn3 = document.querySelector(".ilyo"),
section__3 = document.querySelector(".section__3"),
section__4 = document.querySelector(".section__4")

btn1.addEventListener("click", function () {
    section1.style.display = "none";
});

btn2.addEventListener("click", function () {
    section2.style.display = "none";
});



btn.addEventListener("click", function () {
    section1.style.display = "block";
});




btn.addEventListener("click", function () {
    section_2.style.display = "block";
});



btn2.addEventListener("click", function () {
    section__4.style.display = "block";
});

btn3.addEventListener("click", function () {
    section__4.style.display = "none";
    section1.style.display = "none";
});




let form = document.querySelector(".form"),
input = document.querySelector("input"),
svg = document.querySelector(".img"),
img = document.querySelector(".im");
button = document.querySelector(".button"),
right = document.querySelector(".right");



svg.addEventListener("click", function(){

    input.type = "text";
    input.type = "text"; 
});



svg.addEventListener("click", function(){
    img.style.display = "block";
    svg.style.display = "none";
});
img.addEventListener("click", function(){
    input.type = "password";
    svg.style.display = "block";
    img.style.display = "none";
});



// button.addEventListener("click", function () {
//     right.style.display = "block";
// });