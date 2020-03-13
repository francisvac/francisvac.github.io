// Funtion to deal with scrolling and shrinking
var defaultHeight = 0;

$(window).load(function() {
	defaultHeight = $('#shrinkable').height();
  $('#profile').css("padding-top", defaultHeight  + 25);
	console.log($('#shrinkable').height() + ", " + $('#profile').css("padding-top"));
});

$(window).scroll(function() {
	if ($(document).scrollTop() > 50) {
		$('#shrinkable').addClass('shrink');
  } else {
		$('#shrinkable').removeClass('shrink');
		$('#profile').css("padding-top", defaultHeight + 25);
		console.log(defaultHeight);
  }
});