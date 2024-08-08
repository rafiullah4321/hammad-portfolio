$(document).ready(function() {
  $('.navbar-toggler').click(function() {
    $('#ftco-nav').collapse('toggle');
  });
});


$(document).ready(function(){
    var owl = $('.testimonials-slider');

    owl.owlCarousel({
        items: 4, // Show 4 items per slide
        loop: true,
        margin: 50,
        autoplay: true, // Enable autoplay
        autoplayTimeout: 3000, // Autoplay interval in milliseconds (3 seconds)
        responsiveClass: true,
        responsive:{
            0:{
                items: 1, // Show 1 item per slide on mobile
                nav: true
            },
            800:{
                items: 2, // Show 2 items per slide on tablets
                nav: false
            },
            992:{
                items: 2, // Show 2 items per slide on laptops
                nav: true,
                loop: true
            }
        }
    });

    // Listen for the carousel changed event
    owl.on('changed.testimonials-slider', function(event) {
        // Check if it's the last slide
        if (event.page.index === event.page.count - 1) {
            // Wait for a moment and then jump to the first slide
            setTimeout(function() {
                owl.trigger('to.owl.carousel', 0);
            }, 3000); // Adjust the delay as needed
        }
    });
});



// -----------------------banners Carousel---------------


    