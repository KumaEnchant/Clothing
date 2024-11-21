<?php
session_start();

// Simpan data pengguna ke file JSON sebagai database sederhana
$file = 'users.json';

// Jika file tidak ada, buat file JSON baru
if (!file_exists($file)) {
    file_put_contents($file, json_encode([]));
}

// Ambil data dari form
$username = $_POST['username'];
$password = $_POST['password'];
$confirmPassword = $_POST['confirm_password'];

// Validasi password
if ($password !== $confirmPassword) {
    header("Location: register.php?error=Passwords do not match");
    exit();
}

// Hash password sebelum disimpan
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Baca data pengguna yang ada
$users = json_decode(file_get_contents($file), true);

// Cek apakah username sudah digunakan
foreach ($users as $user) {
    if ($user['username'] === $username) {
        header("Location: register.php?error=Username already exists");
        exit();
    }
}

// Tambahkan pengguna baru
$users[] = [
    'username' => $username,
    'password' => $hashedPassword,
];

// Simpan ke file
file_put_contents($file, json_encode($users));

// Redirect ke halaman login
header("Location: index.php?success=Account created successfully");
exit();
?>
