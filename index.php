<?php  
$request = $_SERVER['REQUEST_URI'];
switch ($request) {
    case '':
    case '/':
        require __DIR__ . '/home.php';
        break;

    case '/about':
        require __DIR__ . '/about.php';
        break;

    case '/contact':
        require __DIR__ . '/contact.php';
        break;
        
    case '/register':
        require __DIR__ . '/views/register.php';
        break;
    
    default:
    http_response_code(404);
    require __DIR__ . '/views/404.php';
}
?>