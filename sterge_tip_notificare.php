<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers "origin, x-requested-with, content-type"');
    header('Access-Control-Allow-Methods "PUT, GET, POST, DELETE, OPTIONS"');
    include 'conn.php';

    $notificationID = 0;
    $id = 1; // VA FI SESSION['ID'] 

        $sql = "
            DELETE FROM [TEST].[USER_TO_NOTIFICATIONS]
            WHERE USER_ID = $id AND NOTIFICATION_ID = $notificationID
        ";
        try{
            $stmt = $conn->prepare($sql);
            $stmt -> execute();
        }catch(Exception $e){
            echo 'Failure';
        }
?>