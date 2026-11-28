<?php
session_start();
require_once __DIR__ . "/backend/database/config.php";

if (isset($_POST[""])) {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $confirm_password = $_POST["confirm_password"];
    $password = $_POST["password"];

    $check_email = $connection->query("SELECT email FROM users where email = '$email'");
    
    if($password != $confirm_password){
        $_SESSION['alerts'][]=[
            'type'=>'error',
            'message'=>'Password not match!'
        ];
        $_SESSION['active-form'] = 'register';
            }
    else {
        $query = $connection->prepare(
            "SELECT email FROM user WHERE email = ?"
        );
        $query->bind_param("s",$email);
        $query->execute();
        $result = $query->get_result();
        if ($result->num_rows >0) {
            $_SESSION["alerts"][]=[
                'type' => 'error',
                'message' => 'email is already registered..'            ];
            $_SESSION['active-form'] = 'register';
        }
        else {
            $hassed_password = password_hash($password,PASSWORD_DEFAULT);
            
        }
        
    }

    
}
header('location : index.php');
exit();

?>