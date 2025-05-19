<?php
$url = $_GET['url'] ?? '';
$url = trim($url, '/');

switch($url){
    case '':
        case 'splash':
            require 'splash.php';
            break;
    case 'QR_Registration':
        require 'QR_Registration.php';
        break;
    case 'dashboard':
        require 'dashboard.php';
        break;
    case 'map':
        require 'map.php';
        break;
    default:
        http_response_code(404);
        echo '<h1>404 - Page Not Found</h1>';
        break;
}
