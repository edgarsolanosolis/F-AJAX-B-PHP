<?php

   $connection = mysqli_connect(
       'localhost',
       'root',
       '',
       'apptareas.bd'
   );

   if($connection){
       echo "Base de datos conectada"
   }

?>