<?php

include('conexion.php');

    if(isset($_POST['name'])){
    $name = $_POST ['name'];
    $description = $_POST ['description'];
    $query = "INSERT into tareas(name, description) VALUES ('$name','$description')";
    $result = mysqli_query($connection, $query);
        if(!$result){
        die('Query fallo');
        }
    echo 'Tarea agregada correctamente';
    }

?>