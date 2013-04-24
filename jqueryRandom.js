$(document).ready(function() {

	$('#red_button1').click(function(){
// this code from http://www.markinns.com/articles/full/simple_two_line_image_randomiser_script_with_jquery
var images = ['images/flamingo_1.png', 'images/cat_1.png', 'images/monkey_1.png', 'images/octopus_1.png', 'images/bear_white1.png',
 'images/panda_1.png', 'images/penguin_1.png', 'images/bluebird_1.png', 'images/giraffe_1.png', 'images/rooster_1.png', 'images/elephant_1.png',
  'images/meercat_1.png', 'images/dogbrown_1.png'];
	$('#slides6_1').css({
		'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + ')'
	});
	//$('<img src="' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#slides6_1');
});

	$('#red_button2').click(function(){
// this code from http://www.markinns.com/articles/full/simple_two_line_image_randomiser_script_with_jquery
var images = ['images/flamingo_2.png', 'images/cat_2.png', 'images/monkey_2.png', 'images/octopus_2.png', 'images/bear_white2.png',
'images/panda_2.png', 'images/penguin_2.png', 'images/bluebird_2.png', 'images/giraffe_2.png', 'images/rooster_2.png', 'images/elephant_2.png',
  'images/meercat_2.png', 'images/dogbrown_2.png'];
	$('#slides6_2').css({
		'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + ')'
	});
	//$('<img src="' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#slides6_1');
});

	$('#red_button3').click(function(){
// this code from http://www.markinns.com/articles/full/simple_two_line_image_randomiser_script_with_jquery
var images = ['images/flamingo_3.png', 'images/cat_3.png', 'images/monkey_3.png', 'images/octopus_3.png', 'images/bear_white3.png',
'images/panda_3.png', 'images/penguin_3.png', 'images/bluebird_3.png', 'images/giraffe_3.png', 'images/rooster_3.png', 'images/elephant_3.png',
  'images/meercat_3.png', 'images/dogbrown_3.png'];
	$('#slides6_3').css({
		'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + ')'
	});
	//$('<img src="' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#slides6_1');
});
});