$(document).ready(function(){
	$('body').keydown(function(e){
		if(e.keyCode == 38){ //up
			$('#test').stop().animate({marginTop:"-=100"});
		}
		if(e.keyCode == 39){ //right
			$('#test').stop().animate({marginLeft:"+=100"});
		}
		if(e.keyCode == 40){ //down
			$('#test').stop().animate({marginTop:"+=100"});
		}
		if(e.keyCode == 37){ //left
			$('#test').stop().animate({marginLeft:"-=100"});
		}
	});
});