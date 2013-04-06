var questions = [
		{text: "this is my question", answers: ["A", "B", "C", "D"],correct: 2},
		{text: "Q 2",answers: ["A 2", "B 3", "qwe", "poi"],correct: 2},
	];
	
	var question_index = 0;
	var display_question = (function() {
		var question = questions[question_index];
		console.log(question);
		$("#question").text(question.text);
		
		$(".answer").each(function(i) {
			$(this).text(question.answers[i]);
		});
	});
	
	var validate_answer = (function(e) {
		alert($(this).text());
		question_index ++;
		display_question();
	});
	
	$(document).ready(function(){
		display_question();
		$(".answer").on("click", validate_answer);
	});