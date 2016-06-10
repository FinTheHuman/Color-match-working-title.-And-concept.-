$(document).ready(function(){



var colors = ["rgba(255, 0, 0, 1)", "rgba(0, 255, 0, 1)", "rgba(0, 0, 255, 1)"];



	
	$('body').keydown(function(e){
		if(e.keyCode == 38){ //up
			$('#test').css({'background-color' : 'red'});
			$('body').css({'background-color' : 'blue'});
			//$('#number').append(1);
		}
		if(e.keyCode == 39){ //right
			$('#test').css({'background-color' : 'blue'});
			$('body').css({'background-color' : 'red'});
			//$('#number').append(1);
		}
		if(e.keyCode == 40){ //down
			$('#test').css({'background-color' : 'yellow'});
			$('body').css({'background-color' : 'green'});
			//$('#number').append(1);
		}
		if(e.keyCode == 37){ //left
			$('#test').css({'background-color' : 'green'});
			$('body').css({'background-color' : 'yellow'});
			//$('#number').append(1);
		}
	});

});
