<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Ly Minh Dien',
            'password' => Hash::make('123456'),
            'email' => 'admin@gmail.com',
        ]);

        $this->call(TagsTableSeeder::class);
        $this->call(PostsTableSeeder::class);
    }
}
