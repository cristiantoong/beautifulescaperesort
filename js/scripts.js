// Testimonial Carousel
const slides = document.querySelectorAll('.testimonial-slide ');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = function() {
    // Get current class
    const current = document.querySelector('.current');
    
    // remove current class
    current.classList.remove('current');

    // Check for next slide
    if(current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current to start or first slide
        slides[0].classList.add('current');
    }
    setTimeout(function(){
        current.classList.remove('current');
    });
}

const prevSlide = function() {
    // Get current class
    const current = document.querySelector('.current');
    
    // remove current class
    current.classList.remove('current');

    // Check for next slide
    if(current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current to last or last slide
        slides[slides.length-1].classList.add('current');
    }
    setTimeout(function(){
        current.classList.remove('current');
    });
}

// Buttons events
next.addEventListener('click', function(){ 
    nextSlide();
    // if click it will wait 5 seconds
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime)
    }
 })
prev.addEventListener('click', function(){ 
    prevSlide();
    // if click it will wait 5 seconds
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime)
    }
 })

// Auto slide
if(auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime)
}

// navbar turns black when scroll down
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 900) {
        $(".navbar").addClass("nav-bg-black");
    } else {
        $(".navbar").removeClass("nav-bg-black");

    }
});  