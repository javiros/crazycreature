
$(document).on("ready", function(){
	$('#slides3').slideUp(10000);
  var questions = [
	{"text": "Who am I?", "answers": ["A Dog", "A Cat", "A Bear", "A Panda"], "correct": "A Panda"},
	
  ];
  
	var score = 0
	var slide = ["images/curtain_photo.png"]

	
	 
	var display_question = (function () {
		var question = questions[score];
		
		$("#question").text(question.text);
		$("#answer").empty();
		for( var i in question.answers) {
			var answer = question.answers[i]
			$("#answer").append("<li>" + answer + "</li>");
		}
		
		$("#answer li").on("click", validate_answer);
	});
	
	var validate_answer = (function () {
	
		if ($(this).text() == questions[score].correct) {
			score++;
					
		$('body').append('<embed src="sounds/grizzlybear.wav" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
           		
			if (questions.length > score) {
				display_question();
				countdown = max_countdown;
			} else {
				$("#question").text("Hey it's a Panda! On to Stage 4");
				$('#next_button').effect("shake", { times:2 }, 2000);
				$('#slides_panda').effect("bounce", { times:3 }, 2000);
				$("#answer").empty();
				clearInterval(countdown_interval);
			}	
		} else {
		  display_error();
		}
				display_score();

	});
	
	var display_error = (function() {
		  $("#question").text("Try Again!");
		  $("#answer").empty();
		  clearInterval(countdown_interval);
	});
	
	var display_score = (function (){ 
			$(".text_blk_25").text(score * 100);
		
			
	});
	
	var max_countdown = 10;
	var countdown = max_countdown;
	var display_countdown = (function() {
		$("#countdown").text(countdown);
	});
	
	var countdown_interval = setInterval(function() {
			display_countdown();
			countdown--;
			if(countdown < 0){
				display_error();
			}
			}, 1000);
		
	display_question();
	display_score();


});	
