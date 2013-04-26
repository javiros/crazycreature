$(document).on("ready", function(){
	var score = 0
 
	$('body').append('<embed src="sounds/drums.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
  
	var droppable_option = {
		activeClass: 'ui-state-hover',
		hoverClass: 'ui-state-active',
		drop: function(event, ui) {		
			ui.draggable.draggable("disable", 1)
		
			$(this).addClass('ui-state-highlight');
			$("body").append('<embed src="sounds/shinyding.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
			
			score++;
			display_score();
			bonus_display();
		}		
	};
	
	$( ".heads, .bodies, .feet" ).draggable({revert: 'invalid'});
		
	$(".heads_slot").droppable($.extend({ accept: '.heads'}, droppable_option));
	$(".bodies_slot").droppable($.extend({ accept: '.bodies'}, droppable_option));
	$(".feet_slot").droppable($.extend({ accept: '.feet'}, droppable_option));
		
	var display_score = (function (){ 
		$(".text_blk_22a").text(800 + score * 100);		
	});
	
	var bonus_display = (function() {
		
		if (score >= 9){
			$("#bonus").effect("shake",{  times: 4}, 3000);
		}
	});
		
	display_score();		
});
