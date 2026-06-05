<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Simpan produk baru ke database.
     * Menggantikan form yang sebelumnya belum punya fungsi backend di index.php lama.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'     => 'required|string|max:255',
            'price'    => 'required|integer|min:0',
            'stok'     => 'required|integer|min:0',
            'kategori' => 'required|string',
        ]);

        Product::create([
            'name'     => $request->name,
            'price'    => $request->price,
            'stok'     => $request->stok,
            'kategori' => $request->kategori,
            'img'      => null, // bisa dikembangkan dengan upload gambar nanti
        ]);

        return redirect()->route('home')->with('success', 'Produk berhasil ditambahkan!');
    }
}
