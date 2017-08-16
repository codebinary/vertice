$WIN = $(window);

/*=================================
=            PreLoader            =
=================================*/
var preloader = function(){
	
	$WIN.on('load', function(){
		//Forzar el desplazamiento de la página a la parte superior al actualizar
		$('html, body').animate({
			scrollTop: 0
		}, 'normal');

		//Se ocultará primero la animación de carga
		// $("#loader").fadeOut('slow', function(){
		// 	//Se ocultará todo el div que cubre el sitio
		// 	$("#preloader").delay(300).fadeOut('slow');
		// });

	});
}


$(document).ready(function(){
	console.log("11312312");
	preloader();
});
