$(document).on("ready", function(){
 var score = 0
 
 $(function() {
  $('body').append('<embed src="sounds/drums.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
	$( "#drag_bluebird1" ).draggable({revert: 'invalid'});
	
	$("#left1").droppable({
    accept: '#drag_bluebird1',
    activeClass: 'ui-state-hover',
    hoverClass: 'ui-state-active',
    drop: function(event, ui) {
        $(this).addClass('ui-state-highlight').find('p');
		$("#drag_bluebird1").append('<embed src="sounds/shinyding.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
	score++;
	display_score();
	}
	
	});
	

	$( "#drag_bluebird2" ).draggable({revert: 'invalid'});
	
	$("#left2").droppable({
    accept: '#drag_bluebird2',
    activeClass: 'ui-state-hover',
    hoverClass: 'ui-state-active',
    drop: function(event, ui) {
        $(this).addClass('ui-state-highlight').find('p');
		$("#drag_bluebird2").append('<embed src="sounds/shinyding.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
		score++;
		display_score();
    }
			
	});

	$( "#drag_bluebird3" ).draggable({revert: 'invalid'});
	
	$("#left3").droppable({
    accept: '#drag_bluebird3',
    activeClass: 'ui-state-hover',
    hoverClass: 'ui-state-active',
    drop: function(event, ui) {
        $(this).addClass('ui-state-highlight').find('p');
		$("#drag_bluebird3").append('<embed src="sounds/shinyding.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
		score++;
		display_score();
    }
	});

$( "#drag_elephant1" ).draggable({revert: 'invalid'});
			
	$("#middle1").droppable({
    accept: '#drag_elephant1',
    activeClass: 'ui-state-hover',
    hoverClass: 'ui-state-active',
    drop: function(event, ui) {
        $(this).addClass('ui-state-highlight').find('p');
		$("#drag_elephant1").append('<embed src="sounds/shinyding.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
		score++;
		display_score();
    }
	});

	$( "#drag_elephant2" ).draggable({revert: 'invalid'});
	
	$("#middle2").droppable({
    accept: '#drag_elephant2',
    activeClass: 'ui-state-hover',
    hoverClass: 'ui-state-active',
    drop: function(event, ui) {
        $(this).addClass('ui-state-highlight').find('p');
		$("#drag_elephant2").append('<embed src="sounds/shinyding.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
		score++;
		display_score();
    }
			
	});

	$( "#drag_elephant3" ).draggable({revert: 'invalid'});
	
	$("#middle3").droppable({
    accept: '#drag_elephant3',
    activeClass: 'ui-state-hover',
    hoverClass: 'ui-state-active',
    drop: function(event, ui) {
        $(this).addClass('ui-state-highlight').find('p');
		$("#drag_elephant3").append('<embed src="sounds/shinyding.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
		score++;
		display_score();
    }
			
	});

$( "#drag_dog1" ).draggable({revert: 'invalid'});
		
    $("#right1").droppable({
    accept: '#drag_dog1',
    activeClass: 'ui-state-hover',
    hoverClass: 'ui-state-active',
    drop: function(event, ui) {
        $(this).addClass('ui-state-highlight').find('p');
		$("#drag_dog1").append('<embed src="sounds/shinyding.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
		score++;
		display_score();
    }
	});

	$( "#drag_dog2" ).draggable({revert: 'invalid'});
	
	$("#right2").droppable({
    accept: '#drag_dog2',
    activeClass: 'ui-state-hover',
    hoverClass: 'ui-state-active',
    drop: function(event, ui) {
        $(this).addClass('ui-state-highlight').find('p');
		$("#drag_dog2").append('<embed src="sounds/shinyding.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
		score++;
		display_score();
    }
			
	});

	$( "#drag_dog3" ).draggable({revert: 'invalid'});
	
	$("#right3").droppable({
    accept: '#drag_dog3',
    activeClass: 'ui-state-hover',
    hoverClass: 'ui-state-active',
    drop: function(event, ui) {
        $(this).addClass('ui-state-highlight').find('p');
		$("#drag_dog3").append('<embed src="sounds/shinyding.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
		score++;
		
		display_score();
    }
			
	});
	
		
	var display_score = (function (){ 
			$(".text_blk_22a").text(800 + score * 100);
		
	});
		
		display_score();
		
});
});
