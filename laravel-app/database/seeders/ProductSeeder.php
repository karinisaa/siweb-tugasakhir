<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            ['name' => 'Hydrating Toner',                        'img' => 'assets/prooduct 1.jpg', 'price' => 125000, 'stok' => 40, 'kategori' => 'Toner'],
            ['name' => 'Facial Wash Brightening',                'img' => 'assets/product 2.jpg',  'price' => 225000, 'stok' => 25, 'kategori' => 'Cleanser'],
            ['name' => 'Brightening Serum',                      'img' => 'assets/product 3.jpg',  'price' => 388000, 'stok' => 50, 'kategori' => 'Serum'],
            ['name' => 'Serum Pinky',                            'img' => 'assets/product 4.jpg',  'price' => 110000, 'stok' => 15, 'kategori' => 'Serum'],
            ['name' => 'Brightening Moisturizer',                'img' => 'assets/product 5.jpg',  'price' => 395000, 'stok' => 15, 'kategori' => 'Moisturizer'],
            ['name' => 'Daily Sunscreen',                        'img' => 'assets/product 6.jpg',  'price' => 500000, 'stok' => 15, 'kategori' => 'Sunscreen'],
            ['name' => 'Gentle Cleanser',                        'img' => 'assets/product 7.jpg',  'price' => 110000, 'stok' => 15, 'kategori' => 'Cleanser'],
            ['name' => 'Bundling Toner & Sunscreen Brightening', 'img' => 'assets/product 8.jpg',  'price' => 678000, 'stok' => 5,  'kategori' => 'Bundling'],
        ];

        foreach ($products as $p) {
            \App\Models\Product::create($p);
        }
    }
}
