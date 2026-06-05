<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Sistem Manajemen Skincare — Karina Beauty')</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Menggunakan asset() Laravel untuk memanggil file CSS public -->
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    @stack('styles')
</head>

<body>
    @auth
    <!-- Navbar hanya ditampilkan jika user login, atau bisa juga ditampilkan terus sesuai kebutuhan -->
    <nav class="navbar navbar-expand-lg bg-white shadow-sm py-3 sticky-top">
        <div class="container">
            <a class="navbar-brand fw-bold brand-text" href="{{ route('home') }}">KARINA BEAUTY</a>

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
                            Halo, <strong class="text-pink">{{ auth()->user()->name }}</strong>
                        </span>
                    </li>
                    <li class="nav-item">
                        <form action="{{ route('logout') }}" method="POST" class="d-inline">
                            @csrf
                            <button type="submit" class="btn btn-sm btn-outline-danger rounded-pill px-3">Logout</button>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    @endauth

    <main>
        @yield('content')
    </main>

    @auth
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
    @endauth

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="{{ asset('js/script.js') }}"></script>
    @stack('scripts')
</body>
</html>
