<?php
//ejecutamos codigo de php para insertar la conexion de mysql
   $connection = mysqli_connect( //los parametros donde me quiero conectar. Se guarda en una variable.
       'localhost',
       'root',
       '',
       'apptareas.bd'
   );

   if($connection){
       echo "Base de datos conectada"
   }

?>