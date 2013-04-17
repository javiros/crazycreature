
$(document).on("ready", function(){
  var questions = [
<<<<<<< HEAD
  {},
  {},
  {},
=======
>>>>>>> c613239953e957e35c5f32c9eb776f995ea2db9e
	{"text": "What is the Sun?", "answers": ["A Star", "A Planet", "A Food", "A Big Bulb"], "correct": "A Star", "picture": "images/monkey_1.png" },
	{"text": "Where is Paris?", "answers": ["In Antartica", "In Your Fridge", "On the Moon", "In France"], "correct": "In France" },
	{"text": "What is a Flamingo?", "answers": ["A Fairy", "A Plant", "A Bird", "A Fluffy Toy?"], "correct": "A Bird" },
  ];
  
<<<<<<< HEAD
	var score = 3
=======
	var score = 0
>>>>>>> c613239953e957e35c5f32c9eb776f995ea2db9e
	var slide = ["images/octopus_1.png", "images/octopus_2.png", "images/octopus_3.png"]
	var sound = ["bubbles.wav"]
	

	 
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
			
		$('#slides2_' + score).slideDown(3000);
		$('body').append('<embed src="sounds/bubbles.wav" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
            $('#ticks').fadeIn(4000);
			
			if (questions.length > score) {
				display_question();
				countdown = max_countdown;
			} else {
				$("#question").text("Brilliant! On to Stage 3");
				$("#answer").empty();
				clearInterval(countdown_interval);
			}	
		} else {
		  display_error();
		}
				display_score();

	});
	
	var display_error = (function() {
		  $("#question").text("you suck");
		  $("#answer").empty();
		  clearInterval(countdown_interval);
	});
	
	var display_score = (function (){ 
			$(".text_blk_25").text(score * 100);
			
	});
	
	var max_countdown = 100;
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
			
			
	var picture_change = (function(){
	if (score == 2) {
	$('#slides_1').slideDown(3000);
            $('#ticks').fadeIn(4000);
			}
	
	
	});
	
	display_question();
	display_score();


});	
