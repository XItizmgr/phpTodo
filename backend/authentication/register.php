<?php

session_start();

require_once __DIR__ . "/backend/database/config.php";
if (isset($_POST["register"])) {

    $username = trim($_POST["username"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $password = $_POST["password"] ?? "";
    $confirm_password = $_POST["confirm_password"] ?? "";

    if (
        empty($username) ||
        empty($email) ||
        empty($password) ||
        empty($confirm_password)
    ) {

        $_SESSION["alerts"][] = [
            "type" => "error",
            "message" => "All fields are required."
        ];
        $_SESSION["active-form"] = "register";
    } elseif ($password !== $confirm_password) {

        $_SESSION["alerts"][] = [
            "type" => "error",
            "message" => "Passwords do not match!"
        ];
        $_SESSION["active-form"] = "register";

    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $_SESSION["alerts"][] = [
            "type" => "error",
            "message" => "Please enter a valid email."
        ];
        $_SESSION["active-form"] = "register";

    } else {
        $query = $connection->prepare(
            "SELECT email FROM users WHERE email = ?"
        );
        $query->bind_param("s", $email);
        $query->execute();
        $result = $query->get_result();
        if ($result->num_rows > 0) {
            $_SESSION["alerts"][] = [
                "type" => "error",
                "message" => "Email is already registered."
            ];
            $_SESSION["active-form"] = "register";

        } else {
            $hashed_password = password_hash(
                $password,
                PASSWORD_DEFAULT
            );
            $query2 = $connection->prepare(
                "INSERT INTO users (username, email, password)
                 VALUES (?, ?, ?)"
            );
            $query2->bind_param(
                "sss",
                $username,
                $email,
                $hashed_password
            );
            if ($query2->execute()) {
                $_SESSION["alerts"][] = [
                    "type" => "success",
                    "message" => "Registration successful!"
                ];
                $_SESSION["active-form"] = "login";
            } else {
                $_SESSION["alerts"][] = [
                    "type" => "error",
                    "message" => "Something went wrong."
                ];
                $_SESSION["active-form"] = "register";
            }
            $query2->close();

        }
        $query->close();

    }

} else {
    header("Location: index.php");
    exit();
}
header("Location: index.php");
exit();

?>