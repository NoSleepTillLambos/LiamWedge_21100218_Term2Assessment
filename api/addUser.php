<?php 

    include 'db_connection.php';

    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: *");

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    // accessing the info below from app js based on the names we have specified in the input field of the markup

    $name = $data->$names;
    $age = $data->$age;
    $petId = $data->$petId;
    $ownerName = $data->$ownerName;
    $ownerId = $data->$ownerId;
    $origin = $data->$origin;
    $destination = $data->$destination;


    $sql = "INSERT INTO pets (id, species, gender, petOwner id, pet name, destination) VALUES (NULL, '$name', '$age', '$petId', '$name', '$destination');";
    $result = mysqli_query($conn, $sql);

    if(!$result){
        echo ("ERROR DESCRIPTION: " . mysqli_error($conn));
    }   else {
        echo ("All is good");
    }
?>