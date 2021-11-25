$(function(){
	var t=0;

	$(window).scroll(function(){
		t=$(window).scrollTop();

		if(t < 100){
			$("#header, .go_top").addClass("scrolled");
		}
		else{
			$("#header, go_top").removeClass("scrolled");
		}
	});
});