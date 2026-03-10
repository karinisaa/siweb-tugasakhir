<?php
session_start();

// Data user hardcode
$valid_users = [
    'admin'  => 'admin123',
    'karina' => 'beauty2026',
];

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ../login.php');
    exit;
}

$username = trim($_POST['username'] ?? '');
$password = $_POST['password'] ?? '';
$remember = isset($_POST['remember']);

if ($username === '' || $password === '') {
    $_SESSION['login_error'] = 'Username dan password tidak boleh kosong.';
    header('Location: ../login.php');
    exit;
}

if (isset($valid_users[$username]) && $valid_users[$username] === $password) {
    // Login berhasil
    $_SESSION['logged_in'] = true;
    $_SESSION['username']  = $username;

    if ($remember) {
        // Simpan username di cookie selama 7 hari
        setcookie('remember_username', $username, time() + (7 * 24 * 3600), '/');
    } else {
        // Hapus cookie jika tidak dicentang
        setcookie('remember_username', '', time() - 3600, '/');
    }

    header('Location: ../index.php');
    exit;
} else {
    $_SESSION['login_error'] = 'Username atau password salah. Silakan coba lagi.';
    header('Location: ../login.php');
    exit;
}
?>