<?php 
session_start(); // start session

$response = array(
    'status' => 0,
    'message' => "Form Submitted Failed"    
);

$errorEmpty = false;
$errorEmail = false;

if(isset($_POST['action']) && $_POST['action'] === "register"){
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $checkbox = $_POST['checkbox'];

    if(empty($username) && empty($email) && empty($password) && !isset($checkbox)){
        $response['message'] = "Fields cannot be empty!";
    } else if(empty($username)){
        $response['message'] = "Username field cannot be empty!";
    } else if(empty($email)){
        $response['message'] = "Email field cannot be empty!";
    } else if(empty($password)){
        $response['message'] = "Password field cannot be empty!";
    } else if(!isset($checkbox)) {
        $response['message'] = "You must agree to our Terms and Conditions!";
    }
}

echo json_encode($response);

?>