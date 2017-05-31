function insertar_documento()
{
	var ce_input =  $('#incarnet');
	var dni_input = $('#indni');
	var btn_dni = $('#bdni');
	var btn_ce = $('#bcarnet');
	var btn_go = $('.btn_go');

	ce_input.hide();			

	$('.insert_data').click(function() {
		var valor = $(this).attr('data');
		if (dni_input.val().length <= 7) {
		var input = dni_input.val(dni_input.val() + valor);
		}
		if (ce_input.val().length <= 11) {
		var input = ce_input.val(ce_input.val() + valor);
		}

		if (ce_input.val().length == 8 || ce_input.val().length == 12)
		{
			btn_go.addClass('btn_active');
		} else {
			btn_go.removeClass('btn_active');
		}
	});			

	btn_dni.click(function() {				
		btn_ce.removeClass('btn_active');
		btn_ce.addClass('btn_violeta');
		$(this).addClass('btn_active');
		$(this).removeClass('btn_violeta');
		ce_input.hide();
		dni_input.show();
		dni_input.val('');
		ce_input.val('');
		btn_go.removeClass('btn_active');
	});

	btn_ce.click(function() {
		btn_dni.removeClass('btn_active');
		btn_dni.addClass('btn_violeta');
		$(this).removeClass('btn_violeta');
		$(this).addClass('btn_active');
		dni_input.hide();
		ce_input.show();
		dni_input.val('');
		ce_input.val('');
		btn_go.removeClass('btn_active');
	});

	$('.btn_back').click(function() {
		dni_input.val(dni_input.val().slice(0, -1));
		//
		ce_input.val(ce_input.val().slice(0, -1));
		if (ce_input.val().length == 8 || ce_input.val().length == 12)
		{
			btn_go.addClass('btn_active');
		} else {
			btn_go.removeClass('btn_active');
		}
	});
}

function popupCrearPin(id)
{
	$('#'+id).click(function() {
		$('.overlay').fadeIn('slow', function() {
			
		});
	});

	$('.close').click(function(){
		$('.overlay').fadeOut('slow');
		$('.overlay').fadeOut('slow');
		return false;
	});

	$('.contenido_popup .pop_gif').click(function() {
		window.location.href = 'user_huella.html';
	});

}
// funciones de animación izquierda / derecha
/*function loopRight(clase, right, left){
    $("." + clase).animate({
        marginLeft : right
        },
        1000, function() {
        loopLeft(clase, right, left);
    });
}
function loopLeft(clase, right, left){
    $("." + clase).animate({
        marginLeft : left
        },
        1000, function() {
        loopRight(clase, right, left)
    });
}*/

function fechaActual(id)
{
	function checkTime(i) {
	  if (i < 10) {
	    i = "0" + i;
	  }
	  return i;
	}

	function startTime() {
	  var fecha = new Date();
	  var y = fecha.getFullYear();
	  var x = fecha.getMonth()+1;
	  var d = fecha.getDate();
	  var h = fecha.getHours();
	  var m = fecha.getMinutes();
	  var s = fecha.getSeconds();
	  // añadir un cero a numeros menores < 10
	  d = checkTime(d);
	  x = checkTime(x);
	  m = checkTime(m);
	  s = checkTime(s);
	  $('.'+id).html("Fecha: " + d + "/" + x + "/" + y + " - " + h + ":" + m + ":" + s);
	  t = setTimeout(function() {
	    startTime()
	  }, 500);
	}
	startTime();
}

$("#backLink").click(function() {
    history.back();
});

function animaciones()
{
	// index
	
	$('nav ul li.menu_ripley').addClass('animated fadeIn');
	$('.logo').addClass('animated fadeIn')
	// 
	$('#swing').addClass('animated fadeIn')
	$('#fadeinleft').addClass('animated fadeIn');
	$('#fadeinright').addClass('animated fadeIn');

	// Tarjetas	
	$('.tipo_tarjeta label:nth-child(2n+1)').addClass('animated fadeIn');
	$('.tipo_tarjeta label:nth-child(2n)').addClass('animated fadeIn');
	//cuatro ultimos digitos
	$('.teclado_ultimo_tarjeta .numericos').addClass('animated fadeIn');
	$('.teclado_ultimo_tarjeta .num_tarjeta').addClass('animated fadeIn');
	//ingreso de Pin
	$('.teclado_pin').addClass('animated fadeIn');
	$('.content_simulador').addClass('animated fadeIn');

	$('.huella_identifier p').addClass('animated fadeIn');
	$('.huella_identifier a').addClass('animated fadeIn');

	$('.mapa_ver').addClass('animated fadeIn');
	$('.detalle_info').addClass('animated fadeIn');

	$('.generar_pin').addClass('animated fadeIn');
	$('.tasas_tarifas').addClass('animated fadeIn');

	$('.btn_actions').addClass('animated fadeIn');

	//post login 
	$('.breadcrum').addClass('animated fadeIn');
	$('.header_tar').addClass('animated fadeIn');
	$('.titulo_red').addClass('animated fadeIn');

	$('.unslider ul li').addClass('animated fadeIn');
	
	$('.user_back:nth-child(1)').addClass('animated fadeIn');
	$('.user_back:nth-child(2)').addClass('animated fadeIn');
	$('.user_back:nth-child(4)').addClass('animated fadeIn');
	$('.user_back:nth-child(3)').addClass('animated fadeIn');

	$('.back_information').addClass('animated fadeIn');
	$('.btn_print').addClass('animated fadeIn')

	function popin(id){
		//ingreso pop up
		$('#'+id).click(function() {
			if ($('.popup').hasClass('animated fadeIn')) {

				$('.popup').removeClass('animated fadeIn');			
				}
			$('.popup').addClass('animated fadeIn');
		});
	}
	
	popin('generar');
	popin('pin');
	popin('cambioPin');

	$('.close').click(function() {
		$('.popup').removeClass('animated fadeIn');
		$('.popup').addClass('animated fadeIn');
	});
}
animaciones();
