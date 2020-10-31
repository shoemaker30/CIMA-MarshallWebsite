<?php
//database information
$host = "db-mysql-nyc1-94769-do-user-6455275-0.b.db.ondigitalocean.com";
$dbUsername = "doadmin";
$dbPassword = "uscoy72zbho7mbjh";
$dbName = "cima_reports";

// Create connection
$conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    header('Location: connect-error.html');
    exit;
}
?>
