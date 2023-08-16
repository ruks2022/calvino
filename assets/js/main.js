// AOS.init();

/*Trending Auction Cards*/
$(document).ready(function() {
    // Swiper: Slider
        new Swiper('.swiper-container', {
            loop: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 20,
            breakpoints: {
                1920: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1028: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        });
    });
    
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () =>{
    if(scrollY >= 188){
        navbar.classList.add('bg');
    }
    else{
        navbar.classList.remove('bg');
    }
})