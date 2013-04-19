   $(document).ready(function(){   
        $('#bird_bounce').on ('mouseover',function(){  
  		$('#bird_bounce').effect("bounce", { times: 3 }, 3000); 
  	});
        $('#bird_bounce').on ('click',function(){  
          $('#bird_bounce').effect("bounce", { times: 3 }, 1000); 
     });
});
 