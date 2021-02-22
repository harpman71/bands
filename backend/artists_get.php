<?php
header('Content-type:application/json;charset=utf-8');
$conexion = mysqli_connect("localhost", "root", "RojoCapo2010", "music");
//$conexion = mysqli_connect("localhost", "kr000247_cmf", "RojoCapo2010", "kr000247_music");

$resultado = mysqli_query($conexion, "select * from artists order by id");

$artists = array();

while($artist = mysqli_fetch_assoc($resultado)){
    $artists[] = $artist;
    }

mysqli_close($conexion);

echo json_encode($artists);

?>




