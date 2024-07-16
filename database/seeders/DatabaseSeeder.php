<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Create a Buyer user
        User::create([
            'name' => 'Buyer User',
            'email' => 'buyer@example.com',
            'password' => bcrypt('password'),
            'role' => User::ROLE_BUYER, // Explicitly set role to 'buyer'
        ]);

        // Create a Startup user
        User::create([
            'name' => 'Startup User',
            'email' => 'startup@example.com',
            'password' => bcrypt('password'),
            'role' => User::ROLE_STARTUP, // Explicitly set role to 'startup'
        ]);
    }
}
