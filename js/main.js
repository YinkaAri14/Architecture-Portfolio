// JS scripts placed here
$(document).ready(function(){
    $('.rending-carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
         cssEase: 'linear'
    });
  });
      
  const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});