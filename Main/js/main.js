/**Initializes the webpage and sets up all the animations
*@Input Null
*
*@retun NULL
*/
function startUp() {
  var fake = document.querySelector("#fake");
  let fakeHide = true;
  // hide .navbar first
  $(".navbar-scroll").hide();
  //Force scroll to top of page on page reload
  $(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });
}


/**Function to check if image entered viewport
*@Input element to enter viewport
*
*@retun boolean
*/
var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


/**Animates skills and makes them appear
*@Input Null
*
*@retun NULL
*/
function skillsAppear(){
  var skills = document.querySelectorAll(".skillsBar .hidden");
  $(window).bind('scroll', function () {
    for(let i = 0; i < skills.length; i++){
      var appear = false;
    // set distance user needs to scroll before skills fades in
      if (isInViewport(skills[i]) && !appear) {
        skills[i].classList.remove("hidden");
        skills[i].classList.add("visible");
        appear = true;
      }
    }
  });
  var skillsDiv = jQuery('#skills');

  jQuery(window).on('scroll', function(){
    var winT = jQuery(window).scrollTop(),
    winH = jQuery(window).height(),
    skillsT = skillsDiv.offset().top;
    if(winT + winH  > skillsT){
      jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
          width:jQuery(this).attr('data-percent')
        },4000);
      });
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