<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Ripleymatico</title>	
	<link rel="stylesheet" href="css/animate.css">
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<link rel="stylesheet" href="css/unslider.css">
	<link rel="stylesheet" href="css/unslider-dots.css">
	<link rel="stylesheet" href="css/style.css">
		
	<link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet">
</head>
<body>

	<div class="contenedor">
		<header>			
			<div class="logo"><h1>Ripley<span class="logo_negrita">Mático</span></h1></div>	
			<nav>
				<ul>
					<li class="menu_ripley"><a href="./"><img src="img/svg/casa.svg" class="svg-inject" alt="flechas" width="100" /></a></li>
					<li class="menu_ripley"><a href="tasasytarifas.html">Tasas <br>y Tarifas</a></li>
					<li class="menu_ripley menu_activo"><a href="red_agencias.html">Red de Agencias</a></li>
					<li class="menu_ripley"><a href="productos.html">Productos</a></li>
					<li class="menu_ripley"><a href="#">Gift Card</a></li>
					<li class="menu_ripley"><a href="#">Beneficios</a></li>
					<li class="menu_ripley"><a href="#">Simulador</a></li>
					<li class="menu_ripley"><a id="pin" href="#">Crear PIN</a></li>
				</ul>
				<div style="clear: both;"></div>				
			</nav>		
		</header>
		<style type="text/css">
			#map {
        height: 100%;
      }
		</style>
		<section>
			<div class="main_content">				
				<div class="titulo_red">
					<h2>Red de agencias</h2>
					<p>Pensando en tu comodidad y seguridad te ofrecemos distintos canales para acceder a la información de tu Tarjeta Ripley</p>
				</div>
				<div class="m10"></div>
				<div class="mapa_detalle mapa_ver">
					<div id="map">
						
					</div>
				</div>
				<div class="mapa_detalle detalle_info">
				<div class="head_pin">
					<img src="img/8.png" alt="" width="30">
					<h2>Ripley - <?= $_GET['a'] ?></h2>
				</div>
				<div class="descripcion">
					<p><?= $_GET['dir'] ?></p>
					<div class="m10"></div>
					<p><strong>Horarios de atención:</strong></p>
					<p>Lunes a Sabado: <?= $_GET['lv'] ?></p>
					<p>Domingos: <?= $_GET['d'] ?></p>
				</div>
				</div>
				<div style="clear: both;"></div>
			</div>				
		</section>
		<footer>
			
		</footer>
	</div>
	<div class="overlay">
		<div class="popup">
			<div class="contenido_popup">
				<a class="close" href="#">&times;</a>
				<div class="popup_main">
				<div class="m20"></div>
				<div class="m13"></div>
				<h2>Identificate</h2>
				<p>Por favor coloca tu dedo índice sobre el detector de huella digital para validar tus datos.</p>
				</div>
				<div class="pop_gif">
					<img src="img/huella.gif" alt="">
					<img class="gif" src="img/flecha.png" alt="" width="40">
					<div style="clear: both;"></div>
				</div>
			</div>
			
		</div>
	</div>
	<script type="text/javascript" src="js/jquery-1.12.4.min.js"></script>
	<script type="text/javascript" src="js/jquery.svginject.js"></script>
	<script type="text/javascript" src="js/unslider-min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
	<script type="text/javascript">
		$('.svg-inject').svgInject();
		var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: <?= $_GET['lat'] ?>, lng: <?= $_GET['lng'] ?>},
          zoom: 16,
          //mapTypeControl: false,
          disableDefaultUI: false,
          zoomControl: false,
          //scaleControl: false,
          fullscreenControl: true,
          draggable: false,
          //navigationControl: false,
          scrollwheel: false,
          disableDoubleClickZoom: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: ['roadmap', 'terrain']
          }
        });

        var image = 'img/map.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: <?= $_GET['lat'] ?>, lng: <?= $_GET['lng'] ?>},
          map: map,
          icon: image
        });
      }
		$(document).ready(function() {

			

		popupCrearPin('pin') // popup crear PIN

			//setInterval(function(){ alert("Holaaaaa"); }, 3000);
		
		});
		
		//loopRight('gif', 90, 0)

	</script>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBZ0HJZssmyzKEsGOetY2XD_t9AzTBSUA&v=3.26&callback=initMap"
    async defer></script>
</body>
</html>