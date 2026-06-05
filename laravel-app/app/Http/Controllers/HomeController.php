<?php

namespace App\Http\Controllers;

use App\Models\Product;

class HomeController extends Controller
{
    /**
     * Tampilkan halaman utama (dashboard + katalog produk).
     * Data produk diambil dari database, menggantikan array hardcoded.
     */
    public function index()
    {
        $products = Product::with('category')->get();
        $categories = \App\Models\Category::all();
        return view('home', compact('products', 'categories'));
    }
}
