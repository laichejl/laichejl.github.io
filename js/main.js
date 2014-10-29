$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });

  var $winHeight = $(window).height();
  $('.jumbotron').css({height: $winHeight});

  $(window).resize(function(){

		var $winHeight = $(window).height();
		$('.jumbotron').css({height: $winHeight});

	});

});
