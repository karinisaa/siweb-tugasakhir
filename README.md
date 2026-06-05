# Karina Beauty - Sistem Manajemen Skincare

Aplikasi web sederhana untuk manajemen katalog produk skincare. Project ini merupakan hasil migrasi bertahap dari **PHP Native** ke framework **Laravel**, dengan mengimplementasikan standar arsitektur MVC secara penuh.

## Implementasi MVC & Eloquent
Project ini mengaplikasikan materi pembelajaran Laravel tingkat lanjut:
- **Konsep MVC**: Pemisahan logika secara rapi antara *Model* (Data), *View* (Blade UI), dan *Controller* (Logika backend).
- **Eloquent Relationship**: Menggunakan relasi antar tabel database (One-to-Many). Tabel `products` berelasi (`belongsTo`) dengan tabel `categories`, sehingga kategori produk diambil secara dinamis dari database, bukan teks *hardcoded*.
- **Migration & Seeder**: Menggunakan skema database *versioning* (Migration) serta pengisian data awal otomatis berupa *dummy* produk, kategori, dan user admin (Seeder).

## Fitur Utama
- **Autentikasi**: Fitur Login & Logout dengan Laravel Auth (mendukung fitur *Remember Me*).
- **Dashboard Katalog**: Menampilkan statistik serta katalog produk yang datanya diambil dari relasi antar tabel (menampilkan nama kategori dari ID relasi).
- **Manajemen Produk**: Form penambahan produk baru dengan dropdown *Kategori* yang datanya ditarik dinamis secara *real-time* dari tabel database.

## Cara Menjalankan Project
1. Masuk ke direktori Laravel:
   ```bash
   cd laravel-app
   ```
2. Pastikan file `.env` sudah dikonfigurasi untuk koneksi MySQL Anda (nama database: `karina_beauty`).
3. Eksekusi database dan seeder data awal:
   ```bash
   php artisan migrate:fresh --seed
   ```
4. Jalankan server lokal:
   ```bash
   php artisan serve
   ```
5. Akses `http://127.0.0.1:8000` di browser dan login dengan:
   - **Username**: `admin`
   - **Password**: `admin123`
