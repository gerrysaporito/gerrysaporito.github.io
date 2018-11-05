/**Initializes the webpage and sets up all the animations
  *@Input Null
  *
  *@retun NULL
  */
function startUp() {
	// hide .navbar first
	$(".navbar-scroll").hide();
	//Force scroll to top of page on page reload
	$(window).on('beforeunload', function(){
	  $(window).scrollTop(0);
	});
}

/**Allows a button to scroll to its respective div for easy page navigation
  *@Input Null
  *
  *@retun NULL
  */
function skillsAppear(){
	var appear = false;
	$('.skillsBar').fadeOut();
	$(window).bind('scroll', function () {
        // set distance user needs to scroll before skills fades in
        if ($(window).scrollTop() > 800 && !appear) {
            $('.skillsBar').fadeIn();
            appear = true;
        }
    });
}




/**Runs all function/animations on the page
  *@Input Null
  *
  *@retun NULL
  */
function pageInit(){
	startUp();
	skillsAppear();
}

pageInit();
skillsAppear();