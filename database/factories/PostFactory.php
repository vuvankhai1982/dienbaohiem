<?php

/** @var Factory $factory */

use App\Models\Post;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Post::class, function (Faker $faker) {
    return [
        'title' => $faker->text(60),
        'status_id' => random_int(1, 2),
        'type_id' => random_int(1, 3),
        'image' => $faker->text(50),
        'short_content' => $faker->text(50),
        'content' => $faker->text(1000),
    ];
});
