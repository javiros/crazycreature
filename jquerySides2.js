   $(document).ready(function(){   
        

        $('#leftSide4').delay(5000).show("slide", { direction: "right" }, 500);
        $('#leftSide4').on ('mouseover',function(){  
  		$('#leftSide4').hide("slide", { direction: "right" }, 200); 
  	});

       $('#rightSide1').delay(7000).show("slide", { direction: "left" }, 500); 
         $('#rightSide1').on ('mouseover',function(){  
  		$('#rightSide1').hide("slide", { direction: "left" }, 200); 
  	});

        $('#rightSide3').delay(11000).show("slide", { direction: "left" }, 300);
        $('#rightSide3').on ('mouseover',function(){  
  		$('#rightSide3').hide("slide", { direction: "left" }, 100); 
  	});


     });

 