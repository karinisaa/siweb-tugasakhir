# Karina Beauty - Sistem Manajemen Skincare

Aplikasi web sederhana untuk manajemen katalog dan inventaris produk skincare (Karina Beauty). Project ini merupakan hasil migrasi dari **PHP Native** menjadi framework **Laravel**.

## Fitur Utama
- **Autentikasi**: Fitur Login & Logout (termasuk fitur *Remember Me*).
- **Dashboard Katalog**: Menampilkan statistik singkat dan daftar produk skincare beserta harga dan stok.
- **Manajemen Produk**: Form untuk menambahkan data produk skincare baru ke dalam database.
- **Wishlist**: Fungsionalitas interaktif UI untuk menyimpan produk ke daftar keinginan (menggunakan JavaScript).

## Teknologi yang Digunakan
- **Backend**: Laravel (PHP Framework)
- **Database**: MySQL (telah dimigrasi dari sekadar data hardcoded array)
- **Frontend**: Blade Templating, Bootstrap 5, Vanilla CSS & JS

## Struktur Folder Migrasi
- File PHP Native lama masih berada di *root directory*.
- Project Laravel yang baru berada secara terpisah dan lebih terstruktur di dalam folder `/laravel-app`.

## Cara Menjalankan Project Laravel
1. Masuk ke direktori Laravel:
   ```bash
   cd laravel-app
   ```
2. Pastikan dependensi sudah terinstal:
   ```bash
   composer install
   ```
3. Sesuaikan file `.env` dengan kredensial database Anda.
4. Jalankan migrasi dan seeder untuk membuat tabel dan data awal (termasuk akun user admin & karina):
   ```bash
   php artisan migrate:fresh --seed
   ```
5. Nyalakan server lokal:
   ```bash
   php artisan serve
   ```
6. Buka `http://127.0.0.1:8000` di browser dan login menggunakan `admin` dan password `admin123`.
