window.onload = function() {
	$('td').on('mouseover', function() {
		$(this).css('background', 'gray');
	}).on('mouseout', function() {
		$(this).css('background', 'white');
	})

}
