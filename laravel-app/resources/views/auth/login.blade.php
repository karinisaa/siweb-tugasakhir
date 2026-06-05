@extends('layouts.app')

@section('title', 'Login — Karina Beauty')

@push('styles')
<style>
    body {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #fff0f3 0%, #ffe4e8 100%);
    }
    .login-card {
        width: 100%;
        max-width: 420px;
        border: none;
        border-radius: 1.5rem;
        box-shadow: 0 8px 32px rgba(231, 84, 128, 0.15);
    }
    .login-logo {
        font-size: 1.8rem;
        font-weight: 800;
        color: #e75480;
        letter-spacing: 2px;
    }
    .login-subtitle {
        color: #aaa;
        font-size: 0.9rem;
    }
    .form-control:focus {
        border-color: #ffb6c1;
        box-shadow: 0 0 0 0.2rem rgba(255, 182, 193, 0.3);
    }
    .btn-login {
        background: linear-gradient(90deg, #e75480, #ffb6c1);
        color: #fff;
        border: none;
        font-weight: 700;
        letter-spacing: 0.5px;
        transition: opacity 0.2s;
    }
    .btn-login:hover {
        opacity: 0.88;
        color: #fff;
    }
</style>
@endpush

@section('content')
<div class="card login-card p-4 p-md-5">
    <div class="text-center mb-4">
        <div class="login-logo mb-1">🌸 KARINA BEAUTY</div>
        <p class="login-subtitle">Sistem Manajemen Skincare</p>
    </div>

    @if (session('login_error'))
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Login Gagal!</strong> {{ session('login_error') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    @endif

    <form method="POST" action="{{ route('login.post') }}" novalidate>
        @csrf
        <div class="mb-3">
            <label for="username" class="form-label fw-semibold text-muted small">Username</label>
            <input
                type="text"
                id="username"
                name="username"
                class="form-control"
                placeholder="Masukkan username..."
                value="{{ old('username') }}"
                autocomplete="username"
                required
            >
        </div>

        <div class="mb-3">
            <label for="password" class="form-label fw-semibold text-muted small">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                class="form-control"
                placeholder="Masukkan password..."
                autocomplete="current-password"
                required
            >
        </div>

        <div class="mb-4 form-check">
            <input
                type="checkbox"
                class="form-check-input"
                id="remember"
                name="remember"
            >
            <label class="form-check-label text-muted small" for="remember">Remember Me</label>
        </div>

        <button type="submit" class="btn btn-login w-100 rounded-pill py-2">Masuk</button>
    </form>

    <p class="text-center text-muted small mt-4 mb-0">
        Demo: <code>admin</code> / <code>admin123</code>
    </p>
</div>
@endsection
