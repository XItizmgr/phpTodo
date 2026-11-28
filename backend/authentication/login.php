<?php
session_start();
require_once("/backend/database/config.php");

if (isset($_POST[""])) {
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);


} else {

}

?>