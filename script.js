   // Spinner
//    var spinner = function () {
//     setTimeout(function () {
//         if ($('#spinner').length > 0) {
//             $('#spinner').removeClass('show');
//         }
//     }, 1);
// };
// spinner();

// new WOW().init();




var nav = document.querySelector("nav");
var about1 = document.querySelector(".about1");
var about2 = document.querySelector(".about2");
var about3 = document.querySelector(".about3");
var about4 = document.querySelector(".about4");

var welcome = document.querySelector(".welcome-img");
var welcome2 = document.querySelector(".welcome2");

window.onscroll = function () {
    if (scrollY > 250) {
        nav.classList.add("sticky-bar");
        about1.style.animation = "fadeInUp 1.5s forwards"
        about2.style.animation = "fadeInUp 1.5s 0.4s forwards"
        about3.style.animation = "fadeInUp 1.5s 0.8s forwards"
        about4.style.animation = "fadeInUp 1.5s 1.2s forwards"
    }
   
}
// window.onscroll = function () {
//     if (scrollY > 400) {
//         // about1.style.animation = "fadeInUp 1.5s forwards"
//         // about2.style.animation = "fadeInUp 1.5s 0.4s forwards"
//         // about3.style.animation = "fadeInUp 1.5s 0.8s forwards"
//         // about4.style.animation = "fadeInUp 1.5s 1.2s forwards"
       
//         welcome.style.animation = "fadeInUp 1.5s forwards"
//         welcome2.style.animation = "fadeInUp 1.5s 0.4s forwards"
//     }
   
// }

window.addEventListener("scroll" ,function(){
    if (scrollY > 550) {
        welcome.style.animation = "fadeInUp 1.5s forwards"
        welcome2.style.animation = "fadeInUp 1.5s 0.4s forwards"
    }
} )



let carousel = document.querySelector("#carouselExampleControls");
    let prevBtn = document.querySelector(".sec2 .prev");
    let nextBtn = document.querySelector(".sec2 .next");
    prevBtn.addEventListener("click", function () {
        bsCarousel.prev();
    });

    let bsCarousel = new bootstrap.Carousel(carousel);


    nextBtn.addEventListener("click", function () {
        bsCarousel.next();
    });