$(document).ready(function(){
  $('.carousel').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  dots: true,
    arrows: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }

  
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

    $('.navigation').on('click', '.nav__toggle', function(event) {
      event.preventDefault();
      //$('.nav__list').slideToggle() Solução que serve, só nao serve se andarmos a brincar com o re-size na página
      $('.navigation__list').toggleClass('navigation__list--open');
      $('.nav__toggle').toggleClass('nav__toggle--open');
    });

  	$('.search__button, .search').on('click', function(e){
  		e.preventDefault();
  		$('.search-background').addClass('search-content__open');
  	});

  	$('.search-background').on('click', function(){
  		$('.search-background').removeClass('search-content__open');
  	}).on('click', '.search-content__info', function(e){
      e.stopPropagation();
    })

  	$('.festival').on('click', '.festival__button', function() {
  		$('.festival-hide--open').removeClass('festival-hide--open');
  		$(this).closest('.festival').addClass('festival-hide--open');
  	
  	});


  	$('.search-content__button').on('click', function() {
  		$(this).closest('.festival').removeClass('festival-hide--open');

  	});

  	

  	if($("[data-fancybox]").length){
  		$("[data-fancybox]").fancybox({
	  		iframe: {
				scrolling: "yes",
				},
			protect : true,
			fullScreen : false,
		});
  	}
  	

	var waypointContent  = $('#content').waypoint({
	  handler: function(direction) {
	    console.log(this.element.id + ' hit', direction)
	    if(direction === "down" ){
	    	$('.header').addClass('header--scroll');
	    }else{
	    	$('.header').removeClass('header--scroll');
	    }
	  }
	});





});
	