$(document).ready(function(){
	$('body').keydown(function(e){
		if(e.keyCode == 38){ //up
			$('#test').stop().animate({marginTop:"-=100"});
			$('#test').css({'background-color' : 'red'});
			//$('body').css({'background-color' : 'blue'});
		}
		if(e.keyCode == 39){ //right
			$('#test').stop().animate({marginLeft:"+=100"});
			$('#test').css({'background-color' : 'blue'});
			//$('body').css({'background-color' : 'red'});
		}
		if(e.keyCode == 40){ //down
			$('#test').stop().animate({marginTop:"+=100"});
			$('#test').css({'background-color' : 'yellow'});
			//$('body').css({'background-color' : 'green'});
		}
		if(e.keyCode == 37){ //left
			$('#test').stop().animate({marginLeft:"-=100"});
			$('#test').css({'background-color' : 'green'});
			//$('body').css({'background-color' : 'yellow'});
		}
	});

	//$('#test').draggable();
});