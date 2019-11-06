<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Archivos Digitales</title>
	<link rel="stylesheet" href="">
	<script type="text/javascript" src="search.js"></script>
	<link rel="stylesheet" href="bootstrap/css/bootstrap.css">
	<!-- JS Code -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="search.php">Archivos Digitales IHNCA</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="search.php">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="search.php">Diarios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="revistas.php">Revistas</a>
      </li>
    </ul>
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>
	<?php
	$arr = dirToArray("Revistas");
	function dirToArray($dir) {
	   $result = array();
	   $cdir = scandir($dir);
	   foreach ($cdir as $key => $value)
	   {
	      if (!in_array($value,array(".","..")))
	      {
	         if (is_dir($dir . DIRECTORY_SEPARATOR . $value))
	         {
	            $result[$value] = dirToArray($dir . DIRECTORY_SEPARATOR . $value);
	         }
	         else
	         {
	            $result[] = $value;
	         }
	      }
	   }
	  
	   return $result;
	}
	echo '<div class="container">';
	echo '<h3>';
  	echo '<small class="text-muted">Busqueda y acceso de Revistas</small>';
	echo '</h3>';
	echo '<br>';

		echo '<div class="row">';
		echo '<div class="col-sm">';
    	echo '</div>';

			echo '<div class="col-sm">';
				echo '<select id="busq" name="busq" onchange="clear()" class="form-control">';
				echo '<option value="Amanecer">Amanecer</option>';
				echo '<option value="Magazine">Magazine</option>';
				echo '<option value="Readers">Readers</option>';
				echo '</select>';
				echo '<br>';
				echo '<button type="button" class="btn btn-primary" value="search" onclick="busqueda()">Buscar</button>';
			echo '</div>';

			echo '<div class="col-sm">';
    		echo '</div>';

		echo '</div>';
	echo '</div>';
	echo '<br>';
	echo '<div class="container">';
		echo '<div class="row">';
		echo '<div class="col-sm">';
    	echo '</div>';
	    	echo '<div class="col-sm">';
				echo '<select id="result" name="result" class="form-control">';
				echo '<option value="">Seleccione...</option>';
				echo '</select>';
				echo '<br>';
				echo '<button type="button" class="btn btn-primary" onclick="search()">Mostrar resultados</button>';
			echo '</div>';

		echo '<div class="col-sm">';
    	echo '</div>';

    echo '</div>';	
	echo '</div>';

	echo '<br><br>';

	echo '<div class="container">';
		echo '<div class="row">';
    		echo '<div class="col">';
    		echo '</div>';

    		echo '<div class="col-8" id="res">';
			echo '</div>';

			echo '<div class="col">';
    		echo '</div>';

		echo '</div>';
	echo '</div>';
	?>

</body>
</html>
<script src="js/jquery.js"></script>
<script>
var arr = <?php echo json_encode($arr); ?>;	
$("#busq").change(function() {
  document.getElementById('result').innerHTML = "";
  document.getElementById('res').innerHTML = "";
});

$("#result").change(function() {
  document.getElementById('res').innerHTML = "";
});
</script>