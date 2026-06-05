<?php
session_start();

// Guard: tolak akses jika belum login
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header('Location: login.php');
    exit;
}

$username = htmlspecialchars($_SESSION['username'] ?? 'User');

$products = [
    ['name' => 'Hydrating Toner',                        'img' => 'assets/prooduct 1.jpg', 'price' => 'Rp 125.000', 'stok' => 40],
    ['name' => 'Facial Wash Brightening',                'img' => 'assets/product 2.jpg',  'price' => 'Rp 225.000', 'stok' => 25],
    ['name' => 'Brightening Serum',                      'img' => 'assets/product 3.jpg',  'price' => 'Rp 388.000', 'stok' => 50],
    ['name' => 'Serum Pinky',                            'img' => 'assets/product 4.jpg',  'price' => 'Rp 110.000', 'stok' => 15],
    ['name' => 'Brightening Moisturizer',                'img' => 'assets/product 5.jpg',  'price' => 'Rp 395.000', 'stok' => 15],
    ['name' => 'Daily Sunscreen',                        'img' => 'assets/product 6.jpg',  'price' => 'Rp 500.000', 'stok' => 15],
    ['name' => 'Gentle Cleanser',                        'img' => 'assets/product 7.jpg',  'price' => 'Rp 110.000', 'stok' => 15],
    ['name' => 'Bundling Toner & Sunscreen Brightening', 'img' => 'assets/product 8.jpg',  'price' => 'Rp 678.000', 'stok' =>  5],
];
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistem Manajemen Skincare — Karina Beauty</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-white shadow-sm py-3 sticky-top">
        <div class="container">
            <a class="navbar-brand fw-bold brand-text" href="index.php">KARINA BEAUTY</a>

            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav align-items-center">
                    <li class="nav-item me-3">
                        <button id="theme-toggle" class="btn btn-outline-pink btn-sm">Dark Mode</button>
                    </li>
                    <li class="nav-item position-relative me-3">
                        <button id="wishlist-button" class="btn btn-outline-pink btn-sm">
                            Wishlist <span id="wishlist-count" class="badge bg-danger ms-1">0</span>
                        </button>
                    </li>
                    <li class="nav-item me-3">
                        <span class="navbar-text text-muted small">
                            Halo, <strong class="text-pink"><?= $username ?></strong>
                        </span>
                    </li>
                    <li class="nav-item">
                        <a href="controller/logout.php" class="btn btn-sm btn-outline-danger rounded-pill px-3">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Background Section -->
    <div class="hero-section" style="background-image: url('assets/background2.jpg');">
        <div class="hero-overlay">
            <div class="hero-content text-center text-white">
                <h1 class="hero-title fw-bold mb-3">KARINA BEAUTY</h1>
                <p class="hero-subtitle mb-4">Selamat datang di sistem manajemen produk skincare.<br>Solusi lengkap untuk mengelola koleksi perawatan kulit terbaik Anda.</p>
                <a href="#products" class="btn btn-hero-pink rounded-pill px-4 py-2 fw-semibold">Lihat Produk</a>
            </div>
        </div>
    </div>

    <!-- Info Stats -->
    <div class="container my-5">
        <div class="row text-center g-3">
            <div class="col-md-4">
                <div class="p-4 border rounded-3 bg-white info-box">
                    <h6 class="fw-bold text-pink mb-2">Total Product</h6>
                    <h2 class="fw-bold mb-0">120</h2>
                </div>
            </div>
            <div class="col-md-4">
                <div class="p-4 border rounded-3 bg-white info-box">
                    <h6 class="fw-bold text-pink mb-2">Total Terjual</h6>
                    <h2 class="fw-bold mb-0">850</h2>
                </div>
            </div>
            <div class="col-md-4">
                <div class="p-4 border rounded-3 bg-white info-box">
                    <h6 class="fw-bold text-pink mb-2">Total Brand</h6>
                    <h2 class="fw-bold mb-0">15</h2>
                </div>
            </div>
        </div>
    </div>

    <!-- Daftar Produk -->
    <div class="container mt-5" id="products">
        <div class="d-flex justify-content-between align-items-end mb-4">
            <h3 class="fw-bold m-0">PRODUCTS</h3>
            <a href="#" class="text-pink text-decoration-none fw-semibold">Lihat Semua ></a>
        </div>

        <div class="row">
            <?php foreach ($products as $p): ?>
            <div class="col-6 col-md-3 mb-4">
                <div class="card product-card h-100 border-0">
                    <img src="<?= htmlspecialchars($p['img']) ?>" class="card-img-top p-2 rounded-4" alt="<?= htmlspecialchars($p['name']) ?>">
                    <div class="card-body px-2 py-3 d-flex flex-column">
                        <h6 class="card-title text-truncate mb-1"><?= htmlspecialchars($p['name']) ?></h6>
                        <p class="card-text fw-bold text-pink mb-2"><?= htmlspecialchars($p['price']) ?></p>
                        <p class="stok-text text-muted small mb-3">Stok: <?= (int)$p['stok'] ?></p>
                        <div class="d-flex justify-content-between">
                            <button class="btn btn-outline-pink btn-buy w-50 me-2" <?= $p['stok'] <= 0 ? 'disabled' : '' ?>>Beli</button>
                            <button class="btn btn-outline-pink btn-wishlist w-50">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>

    <!-- Form Manajemen Produk -->
    <div class="container mt-5 mb-5">
        <h3 class="mb-4 fw-bold">Manajemen Data Produk</h3>
        <div class="card p-4">
            <form>
                <div class="mb-3">
                    <label class="form-label text-muted small fw-bold">Nama Produk</label>
                    <input type="text" class="form-control" placeholder="Masukkan produk baru...">
                </div>
                <div class="mb-3">
                    <label class="form-label text-muted small fw-bold">Harga</label>
                    <input type="number" class="form-control" placeholder="Masukkan harga produk...">
                </div>
                <div class="mb-3">
                    <label class="form-label text-muted small fw-bold">Stok</label>
                    <input type="number" class="form-control" placeholder="Masukkan jumlah stok...">
                </div>
                <div class="mb-4">
                    <label class="form-label text-muted small fw-bold">Kategori</label>
                    <select class="form-select">
                        <option>Pilih Kategori...</option>
                        <option>Serum</option>
                        <option>Toner</option>
                        <option>Cleanser</option>
                        <option>Moisturizer</option>
                        <option>Sunscreen</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-custom-pink w-100 rounded-pill py-2 fw-bold">Simpan</button>
            </form>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-white border-top text-center py-4 mt-5">
        <h5 class="fw-bold text-pink mb-2">KARINA BEAUTY</h5>
        <p class="text-muted small mb-0">© 2026 Sistem Manajemen Skincare Karina Beauty.</p>
    </footer>

    <!-- Wishlist Modal -->
    <div class="modal fade" id="wishlistModal" tabindex="-1" aria-labelledby="wishlistModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="wishlistModalLabel">Daftar Wishlist Saya</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id="wishlist-items"></div>
                <div class="modal-footer d-flex justify-content-start">
                    <button type="button" id="clear-wishlist" class="btn btn-danger">Kosongkan Wishlist</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>