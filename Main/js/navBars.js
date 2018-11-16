/**Iinitializes sidebar toggle
  *@Input Null
  *
  *@retun NULL
  */
  function sideBarToggle() {
   var toggle = document.querySelectorAll(".fa-bars");
   var togDiv = document.querySelector(".toggle");
   var togHide = false;
   var togOptions = $(".toggle a");

	//when toggle bars show, shows navbar option screen
	for(var togIndex= 0; togIndex < toggle.length; togIndex++) {
		toggle[togIndex].addEventListener("click", function() {
			if(!togHide){
				$(".toggle").css('display', '');
				$(".toggle").fadeIn();
				$(".toggle").css('zIndex', '8');
				$('.scrlNavbar').fadeOut();
				togHide = true;
			}
		});
		//hide navbar option screen on scroll
		$(window).bind('scroll', function(){
			if(togHide) {
				$(".toggle").fadeOut();
				togHide = false;
			}
		});
    //hide navbar option screen on click
    $(".toggle").bind('click', function(){
      if(togHide) {
        $(".toggle").fadeOut();
        togHide = false;
      }
    });
  }
	//hide navbar option screen on option click
	for(var optionIndex = 0; optionIndex < togOptions; togOptions++) {
		togOptions[optionIndex].addEventListener("click", function() {
			if(togHide) {
				$(".toggle").fadeOut(2000);
				togHide = false;
			}
		});
	}
}

/**Initializes and runs the buttons on the navbars
  *@Input Null
  *
  *@retun NULL
  */
  function scrollToDiv(event, href) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  }

/**Scrollbar slide down after certain page scroll
  *@Input Null
  *
  *@retun NULL
  */
  function navAppear(){
  	// fade in .navbar
    $(function () {
      var fake = document.querySelector("#fake");
      $(window).bind('scroll', function () {
            // set distance user needs to scroll before we start fadeIn
            if ($(window).scrollTop() > 680) {
              $('.scrlNavbar').fadeIn();
            } else {
              $('.scrlNavbar').fadeOut();
            }
          });
    });
  	//Fade out fake landing page after scrolling
  	$(window).bind('scroll', function() {
      let fakeElem = document.querySelector('#fake').getBoundingClientRect().top;
      if(fakeElem < 0){
        $('#fake').fadeOut();
      }
    });
    //Fade out fake landing page on click
    fake.addEventListener("click", function() {
      $('#fake').fadeOut();
    });
  }

/**Page scroll to div when nav button is pressed
  *@Input Null
  *
  *@retun NULL
  */
  function buttonScrollDown(){
  	$('a[href^="#"]').on('click', function(event) {

      var target = $(this.getAttribute('href'));

      if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }

    });
  }

/**Initializes and runs the scrolable navbar, with the fade-in animation
  *@Input Null
  *
  *@retun NULL
  */
  function navBars(){
   sideBarToggle();
   navAppear();
   buttonScrollDown();

 }


 navBars();