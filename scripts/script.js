/*jQuery function to animate the side-bar based on screen width*/

function animateSidebar(x){
	if (x.matches){
		
		$(document).ready(function(){
		$(".side-bar").animate({left: '0px'}, "slow");
		});
	}
	else{
		$(document).ready(function(){
		$(".side-bar").finish();
		});
	}
}

var x = window.matchMedia("(min-width: 480px)")//assign the media query string to a variable and pass to lister function
animateSidebar(x) // Calllistener function at run time
x.addListener(animateSidebar)

/*google map*/



/*jQuery for on hover testimonial boxes*/

function animateTestimonial(x){
	if (x.matches){
		$(document).ready(function(){
		$(".testimonial").hover(function(){
		$(this).animate({left: '0px'},"slow");},
		function(){$(this).animate({left: '180px'},"slow");
		});
		});
	}
	
	else {
		$(document).ready(function(){
		$(".testimonial").hover(function(){
		$(this).animate({left: '195px'},"slow");},
		function(){$(this).animate({left: '380px'},"slow");
		});
		});
	}
}

var x = window.matchMedia("(min-width: 480px)")//assign the media query string to a variable and pass to lister function
animateTestimonial(x) // Calllistener function at run time
x.addListener(animateTestimonial)

/*JQuery for text to appear and hide (overlay) - meet the team page*/


$(document).ready(function(){
	
	$(".team-member").mouseenter(function(){
    $(this).find('.more').fadeIn("fast");
    
});


	$(".team-member").mouseleave(function(){
    $(this).find('.more').fadeOut("fast");
    
});
	
});



/*JQuery for onmouseover event in contact.html*/


	
	$(document).ready(function(){
	$(".contact-title").mouseover(function(){
	$(this).css({"color":"blue","fontWeight":"bold"});
	});
	$(".contact-title").mouseout(function(){
		$(this).css({"color": "","fontWeight":"normal"});
	});
	});





