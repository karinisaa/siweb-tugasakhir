<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        \App\Models\User::create([
            'name' => 'Administrator',
            'username' => 'admin',
            'password' => \Illuminate\Support\Facades\Hash::make('admin123'),
        ]);

        \App\Models\User::create([
            'name' => 'Karina',
            'username' => 'karina',
            'password' => \Illuminate\Support\Facades\Hash::make('beauty2026'),
        ]);
    }
}
