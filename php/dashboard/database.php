<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "dps_yven";

$connection = new mysqli(
    $servername, 
    $username, 
    $password, 
    $dbname);

if ($connection->connect_error) {
    die("Conexión fallida: " . $connection->connect_error);
}
?>
