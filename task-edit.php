<?php

    include('conexion.php');
    $id = $_POST['id'];
    $name = $_POST['name'];
    $description = $_POST['description'];

    $query = "UPDATE tareas SET name = '$name', description = '$description' WHERE id = '$id'";

    $result = mysqli_query($connection, $query);
    if(!$result){
        die('El query fallo');
    }
    echo "Tarea actualizada satisfactoriamente";
?>