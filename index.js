const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 40)
});
function mobileMenu(){

    let hamburger = document.querySelector(".navigation")
    hamburger.classList.toggle('active')
    console.log(hamburger)
}