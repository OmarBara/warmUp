$('button#left').on('click', function(){
	var addelEment = $('<li>added Element</li>');
	$('ul#leftlist').text('addelEment')
})

$('button#right').on('click', function(){
	var addelEment = $('<li>added Element</li>');
	$('ul#rightlist').text('addelEment')
})