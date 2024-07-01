<?php
session_start();

$response = array(
    'is_logged_in' => isset($_SESSION['user_id']),
    'user_name' => isset($_SESSION['user_name']) ? $_SESSION['user_name'] : ''
);

header('Content-Type: application/json');
echo json_encode($response);
?>