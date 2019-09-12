<?php
//ejecutamos codigo de php para insertar la conexion de mysql
//los parametros donde me quiero conectar. Se guarda en una variable.
   $connection = mysqli_connect( 
       'localhost',
       'root',
       '',
       'apptareas.bd'
   );

  // if($connection){           ESTO ES PARA SABER SI LA CONEXION A LA BD FUNCIONA
 //      echo "Base de datos conectada";
 //  }

?>