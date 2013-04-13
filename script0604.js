
$(document).on("ready", function(){
  var questions = [
	{"text": "What's the capital of Italy?", "answers": ["Rome", "Paris", "Oslo", "Dublin"], "correct": "Rome", "picture": "images/monkey_1.png" },
	{"text": "What is the capital of Germany?", "answers": ["Zagreb", "London", "Viena", "Berlin"], "correct": "Berlin" },
	{"text": "What is the capital of Ireland?", "answers": ["Belfast", "Dublin", "Chaco", "Madrid"], "correct": "Dublin" },
  ];
  
	var score = 0
	var slide = ["images/monkey_1.png", "images/monkey_2.png", "images/monkey_3.png"]
	var sound = ["monkeysound.wav"]
	

	 
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
			
		$('#slides_' + score).slideDown(3000);
		$('body').append('<embed src="sounds/monkeysound.wav" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
            $('#ticks').fadeIn(4000);
			
			if (questions.length > score) {
				display_question();
				countdown = max_countdown;
			} else {
				$("#question").text("you are great quiz finished!");
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
