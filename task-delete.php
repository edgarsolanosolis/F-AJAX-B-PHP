<?php

    include('conexion.php');
    if(isset($_POST['id'])){
        $id = $_POST['id'];
        $query = "DELETE FROM tareas WHERE id = $id";
        $result = mysqli_query($connection, $query);
            if(!$result){
            die('Consulta fallida');
            }
            echo "Tarea eliminada satisfactoriamente";
    }
?>