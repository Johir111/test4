jQuery(document).ready(function($){
	$(".slider-area").owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true,
		autoplay:true,
		animateOut: 'rollOut',
        animateIn: 'fadeIn'
		
	});
	
	$(".logo-carousel").owlCarousel({
		items:5,
		loop:true,
		margin:30,
		nav:false,
		dots:true,
		autoplay:true
		
		
	});
	
});