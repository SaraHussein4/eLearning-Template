var nav = document.querySelector("nav");
var about1 = document.querySelector(".about1");
var about2 = document.querySelector(".about2");
var about3 = document.querySelector(".about3");
var about4 = document.querySelector(".about4");

var welcome = document.querySelector(".welcome-img");
var welcome2 = document.querySelector(".welcome2");

// window.onscroll = function () {
//     if (scrollY > 0) {
//         nav.classList.add("sticky-bar");
//         about1.style.animation = "fadeInUp 1.5s forwards"
//         about2.style.animation = "fadeInUp 1.5s 0.4s forwards"
//         about3.style.animation = "fadeInUp 1.5s 0.8s forwards"
//         about4.style.animation = "fadeInUp 1.5s 1.2s forwards"
//     }
   
// }

window.addEventListener("DOMContentLoaded" , function(){
    
        nav.classList.add("sticky-bar");
        about1.style.animation = "fadeInUp 1.5s forwards"
        about2.style.animation = "fadeInUp 1.5s 0.4s forwards"
        about3.style.animation = "fadeInUp 1.5s 0.8s forwards"
        about4.style.animation = "fadeInUp 1.5s 1.2s forwards"
    
})

var course = document.querySelector(".course");
window.addEventListener("DOMContentLoaded" , function(){
    course.style.animation ="fadeInUp 1.5s forwards";
})