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