 $(function() {
	$( "#drag_bluebird1" ).draggable();
			$( "#left1" ).droppable({
			drop: function( event, ui ) {
			$( this )

			.find( "p" )
			.html( "Dropped!" );
		}
	});

	$( "#drag_bluebird2" ).draggable();
			$( "#left2" ).droppable({
			drop: function( event, ui ) {
			$( this )

			.find( "p" )
			.html( "Dropped!" );
		}
	});

	$( "#drag_bluebird3" ).draggable();
			$( "#left3" ).droppable({
			drop: function( event, ui ) {
			$( this )
			.find( "p" )
			.html( "Dropped!" );
		}
	});

$( "#drag_elephant1" ).draggable();
			$( "#middle1" ).droppable({
			drop: function( event, ui ) {
			$( this )

			.find( "p" )
			.html( "Dropped!" );
		}
	});

	$( "#drag_elephant2" ).draggable();
			$( "#middle2" ).droppable({
			drop: function( event, ui ) {
			$( this )

			.find( "p" )
			.html( "Dropped!" );
		}
	});

	$( "#drag_elephant3" ).draggable();
			$( "#middle3" ).droppable({
			drop: function( event, ui ) {
			$( this )
			.find( "p" )
			.html( "Dropped!" );
		}
	});

$( "#drag_dog1" ).draggable();
			$( "#right1" ).droppable({
			drop: function( event, ui ) {
			$( this )

			.find( "p" )
			.html( "Dropped!" );
		}
	});

	$( "#drag_dog2" ).draggable();
			$( "#right2" ).droppable({
			drop: function( event, ui ) {
			$( this )

			.find( "p" )
			.html( "Dropped!" );
		}
	});

	$( "#drag_dog3" ).draggable();
			$( "#right3" ).droppable({
			drop: function( event, ui ) {
			$( this )
			.find( "p" )
			.html( "Dropped!" );
		}
	});

});

