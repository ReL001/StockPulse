<?php 
session_start(); // start session
require_once('database-connection.php');

$response = array(
    'status' => 0,
    'message' => "Form Submitted Failed"    
);

$errorEmpty = false;
$errorEmail = false;

if(isset($_POST['action']) && $_POST['action'] === "register"){
    $username = escape_this_string($_POST['username']);
    $email = escape_this_string($_POST['email']);

    $password = escape_this_string($_POST['password']);
    $salt = bin2hex(openssl_random_pseudo_bytes(22));
    $encrypted_password = md5($password . '' . $salt);
    
    $checkbox = $_POST['checkbox'];
    
    $checkUserNameQuery = "SELECT username from users WHERE username = ?";
    $checkEmailQuery = "SELECT email from users WHERE email = ?";
    $userNameParam = [$username];
    $emailParam = [$email];

    if(empty($username) && empty($email) && empty($password) && !isset($checkbox)){
        $response['message'] = "Fields cannot be empty!";
    } else if(empty($username)){
        $response['message'] = "Username field cannot be empty!";
    } else if (fetch_record($checkUserNameQuery, $userNameParam)){
        $response['message'] = "Username already in use!";
    } else if(empty($email)){
        $response['message'] = "Email field cannot be empty!";
    } else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $response['message'] = "Put in a valid email address!";
    } else if(fetch_record($checkEmailQuery, $emailParam))  {
        $response['message'] = "Email already in use!";
    } else if(empty($password)){
        $response['message'] = "Password field cannot be empty!";
    } else if(strlen($password) < 8) {
        $response['message'] = "Password length is short!";
    } else if(strlen($password) > 20) {
        $response['message'] = "Your Password is too long!";
    } else if (!preg_match("#[0-9]+#", $password)) {
        $response['message'] = "Password must include at least one number!";
    } else if (!preg_match("#[a-z]+#", $password)) {
        $response['message'] = "Password must include at least one letter!";
    } else if (!preg_match("#[A-Z]+#", $password)) {
        $response['message'] = "Password must include at least one CAPITAL letter!";
    } else if( !preg_match("#[^\w\s]+#", $password ) ) { 
        $response['message'] = "Password must include at least one symbol!";
    } else if(!isset($checkbox)) {
        $response['message'] = "You must agree to our Terms and Conditions!";
    } else {
        $query = "INSERT INTO users (username, email, password, salt, created_at) VALUES (?, ?, ?, ?, NOW())";
        $params = [$username, $email, $encrypted_password, $salt];
    
        if(run_mysql_query($query, $params)) {
            $response['status'] = 1;
            $response['message'] = "Successfully Registered! <a href='/login'>Log-in Now</a>";
        } else {
            $response['message'] = "ERROR IN DATABASE!";
        }
    }    
}

echo json_encode($response);

?>