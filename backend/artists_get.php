<?php
header('Content-type:application/json;charset=utf-8');

$conexion = mysqli_connect("host", "root", "password", "database");


$resultado = mysqli_query($conexion, "select * from artists order by id order by name");

$artists = array();

while($artist = mysqli_fetch_assoc($resultado)){
    $artists[] = $artist;
    }

mysqli_close($conexion);

echo json_encode($artists);

?>




