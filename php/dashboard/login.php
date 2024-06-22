<?php
session_start();
require 'database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['loginEmail'];
    $password = $_POST['loginPassword'];

    $sql_inquiry = 'SELECT * FROM users WHERE email = ?';
    $stmt = $connection->prepare($sql_inquiry);
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) { // Assuming the field is 'password'
            $_SESSION['userId'] = $user['id'];
            header("Location: home.php"); // Change to your home page
            exit();
        } else {
            echo "Contraseña incorrecta";
        }
    } else {
        echo "Usuario no encontrado";
    }

    $stmt->close();
    $connection->close();
}
?>
