<?php
$host = "localhost:3309";
$user = "root";
$password = "";
$databaseName = "todo";

$connection = new mysqli($host,$user,$password,$databaseName);
 
if($connection->connect_error){
    die("database connection failed : .$connection->connect_error");
}
else {
    echo " connection succesfully";
}



?>