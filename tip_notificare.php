<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers "origin, x-requested-with, content-type"');
    header('Access-Control-Allow-Methods "PUT, GET, POST, DELETE, OPTIONS"');
    include 'conn.php';

    $checked3 = $_POST['checked3'];
    $checked4 = $_POST['checked4'];
    $checked5 = $_POST['checked5'];
    $checked6 = $_POST['checked6'];
    $id = 1; // VA FI SESSION['ID'] 

    if ($checked3 == true)
    $notificationID = 0;
    if ($checked4 == true)
    $notificationID = 1;
    if ($checked5 == true)
    $notificationID = 2;
    if ($checked6 == true)
    $notificationID = 3;
    
        $sql = "
            INSERT INTO [TEST].[USER_TO_NOTIFICATIONS] ([USER_ID],[NOTIFICATION_ID]) 
            VALUES (:ID, :NOTIFICATION_ID)
        ";
        $params = array(
            ':ID' => $id,
            ':NOTIFICATION_ID' => $notificationID
        );
        try{
            $stmt = $conn->prepare($sql);
            $stmt -> execute($params);
        }catch(Exception $e){
            echo 'Failure';
        }
?>