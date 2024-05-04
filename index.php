<?php  
$request = $_SERVER['REQUEST_URI'];
switch ($request) {
     case '':
	 case '/':
    	require __DIR__ . '/home.php';
        break;
        
     case '/about':
    	require __DIR__ . '/about.php';
}
?>