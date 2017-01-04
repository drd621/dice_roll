// Displays a random number between 1 and 6 when button is clicked

$(document).ready(function() {
	$('#button').click(function() {
		$('#dice').text(Math.floor(Math.random() * 6) + 1);
	});
});