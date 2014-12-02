$(document).ready(function() {

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
