$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });

// Colors on Hover
  $('h2 span.developer').hover(function(){
  	$(this).toggleClass('developer_hover');
  	$('div#skills h4 span.developer').toggleClass('developer_hover');
  });

  $('h2 span.designer').hover(function(){
  	$(this).toggleClass('designer_hover');
  	$('div#skills h4 span.designer').toggleClass('designer_hover');
  });

  // Making Containers full window height
  var $winHeight = $(window).height();
  $('.jumbotron').css({height: $winHeight});

  $('.content').css({height: $winHeight});

  $(window).resize(function(){

		var $winHeight = $(window).height();
		$('.jumbotron').css({height: $winHeight});
		$('.content').css({height: $winHeight});

	});



  //Plugins
  smoothScroll.init();

});
