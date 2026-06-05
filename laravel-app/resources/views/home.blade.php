@extends('layouts.app')

@section('content')
<!-- Hero Background Section -->
<div class="hero-section" style="background-image: url('{{ asset('assets/background2.jpg') }}');">
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
                <h2 class="fw-bold mb-0">{{ $products->count() }}</h2>
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
        @foreach ($products as $p)
        <div class="col-6 col-md-3 mb-4">
            <div class="card product-card h-100 border-0">
                <img src="{{ asset($p->img) }}" class="card-img-top p-2 rounded-4" alt="{{ $p->name }}">
                <div class="card-body px-2 py-3 d-flex flex-column">
                    <h6 class="card-title text-truncate mb-1">{{ $p->name }}</h6>
                    <p class="card-text fw-bold text-pink mb-2">Rp {{ number_format($p->price, 0, ',', '.') }}</p>
                    <p class="stok-text text-muted small mb-3">Stok: {{ $p->stok }}</p>
                    <div class="d-flex justify-content-between">
                        <button class="btn btn-outline-pink btn-buy w-50 me-2" {{ $p->stok <= 0 ? 'disabled' : '' }}>Beli</button>
                        <button class="btn btn-outline-pink btn-wishlist w-50">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>
</div>

<!-- Form Manajemen Produk -->
<div class="container mt-5 mb-5">
    <h3 class="mb-4 fw-bold">Manajemen Data Produk</h3>
    <div class="card p-4">
        <form action="{{ route('product.store') }}" method="POST">
            @csrf
            
            @if(session('success'))
                <div class="alert alert-success">{{ session('success') }}</div>
            @endif

            <div class="mb-3">
                <label class="form-label text-muted small fw-bold">Nama Produk</label>
                <input type="text" name="name" class="form-control" placeholder="Masukkan produk baru..." required>
            </div>
            <div class="mb-3">
                <label class="form-label text-muted small fw-bold">Harga</label>
                <input type="number" name="price" class="form-control" placeholder="Masukkan harga produk..." required>
            </div>
            <div class="mb-3">
                <label class="form-label text-muted small fw-bold">Stok</label>
                <input type="number" name="stok" class="form-control" placeholder="Masukkan jumlah stok..." required>
            </div>
            <div class="mb-4">
                <label class="form-label text-muted small fw-bold">Kategori</label>
                <select name="kategori" class="form-select" required>
                    <option value="">Pilih Kategori...</option>
                    <option value="Serum">Serum</option>
                    <option value="Toner">Toner</option>
                    <option value="Cleanser">Cleanser</option>
                    <option value="Moisturizer">Moisturizer</option>
                    <option value="Sunscreen">Sunscreen</option>
                    <option value="Bundling">Bundling</option>
                </select>
            </div>
            <button type="submit" class="btn btn-custom-pink w-100 rounded-pill py-2 fw-bold">Simpan</button>
        </form>
    </div>
</div>
@endsection
