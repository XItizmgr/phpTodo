<?php
session_start();
require_once __DIR__ . "/backend/database/config.php";

if (isset($_POST['login'])) {
    $email = $_POST['email'] ?? null;
    $password = $_POST['password'] ?? null;

    $query = $connection->prepare("SELECT * FROM users where email = ?");
    $query->bind_param('s', $email);
    $query->execute();

    $result = $query->get_result();

    $user = $result->num_rows > 0 ? $result->fetch_assoc() : null;

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['name'] = $user['username'];
        $_SESSION['alerts'][] = [
            'type' => 'success',
            'message' => 'login successfull'
        ];
    } else {
        $_SESSION['alert'][] = [
            'type' => "error",
            'message' => "incorect passowrd or email."
        ];
        $_SESSION["active-form"] = 'login';
    }
    header('location : index.php');
    exit();
}

?>