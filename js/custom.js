$( document ).ready(function(){
    $('.priceImageContainer').hide();
    $(".dropdown-button").dropdown();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $(".button-collapse").sideNav();
    
    // Show and hide pricing image
    $('.pricingImage').on('click', function(){
        $('.priceImageContainer').slideToggle(400);
    })
    
})