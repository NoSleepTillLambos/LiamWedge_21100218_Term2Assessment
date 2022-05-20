<?php 

    $dbhost = "localhost";
    $dbusername = "root";
    $dbpassword = "root";
    $dbname = "petrelocation";

    $conn = new mysqli($dbhost , $dbusername , $dbpassword , $dbname);

    if($mysqli -> connect_error){
        echo 'failed to connect to database: ' . $mysqli -> connect_error;
        exit();
    }
?>