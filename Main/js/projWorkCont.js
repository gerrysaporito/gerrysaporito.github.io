/**Fades in projects and work experience
  *@Input Null
  *
  *@retun NULL
  */
function contAppear() {
	var prod = $('.contIn');
	var scrollPosition = 0;
	var prodDistFromTop = [];

	//finding the distance each proj/work div is from top of page
	for(let i = 0; i < prod.length; i++) {
		prodDistFromTop[i] = prod[i].getBoundingClientRect().top;
	}
	//clearing all prods
	window.addEventListener("scroll", function() {
		scrollPosition = $(document).scrollTop();
	});	
	for(let prodIndex = 0; prodIndex < prod.length; prodIndex++) {
			prod[prodIndex].checkPosition(prod[prodIndex], scrollPosition, prodDistFromTop[prodIndex]);
	}
}

function checkPosition(product, scrl, prodDist) {
	if(scrl > prodDist && product.style.display === "none") {
		console.log("hi");
		//product.fadeIn();
	}
}

contAppear();