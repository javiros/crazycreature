   $(document).ready(function(){   
        

        $('#leftSide1').delay(4000).show("slide", { direction: "right" }, 200);
        $('#leftSide1').on ('mouseover',function(){  
  		$('#leftSide1').hide("slide", { direction: "right" }, 100); 
  	});

$('#leftSide4').delay(6000).show("slide", { direction: "right" }, 500);
        $('#leftSide4').on ('mouseover',function(){  
      $('#leftSide4').hide("slide", { direction: "right" }, 200); 
    });

       $('#rightSide2').delay(7000).show("slide", { direction: "left" }, 400); 
         $('#rightSide2').on ('mouseover',function(){  
  		$('#rightSide2').hide("slide", { direction: "left" }, 100); 
  	});

        $('#rightSide3').delay(9000).show("slide", { direction: "left" }, 400);
        $('#rightSide3').on ('mouseover',function(){  
  		$('#rightSide3').hide("slide", { direction: "left" }, 100); 
  	});



     });

 