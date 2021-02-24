$(document).ready(function(){
	/*For modal*/
	$('.modal').modal({
		startingTop: '80%',
		inDuration: 1000,
		outDuration: 1000
	});



$('.copyClick').click(function(){
	$(this).focus();
	$(this).select();
	document.execCommand('copy');
});

});



  

