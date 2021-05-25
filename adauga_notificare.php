<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers "origin, x-requested-with, content-type"');
    header('Access-Control-Allow-Methods "PUT, GET, POST, DELETE, OPTIONS"');
    include 'conn.php';

    $mesaj = $_POST['Mesaj'];
    $priority = $_POST['Priority'];

    $sql = "
    INSERT INTO [TEST].[NOTIFICARI] 
    ([MESAJ],[DATA_CREAT],[PRIORITY]) 
    VALUES (
        :MESAJ,
        GETDATE(),
        :PRIORITY
    ) 
    ";
    $params = array(
        ':MESAJ' => $mesaj,
        ':PRIORITY' => $priority
    );
    try{
        $stmt = $conn->prepare($sql);
        $stmt -> execute($params);
        //$data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        //echo '<pre>';
        //print_r($data);
    }catch(Exception $e){
        echo 'Failure';
    }
?>