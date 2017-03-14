<?php
/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\Post::class, function (Faker\Generator $faker) {
    $user = DB::table('users')->lists('id');
    return [
        'title' => $faker->name,
        'slug' => $faker->slug,
        'description' => $faker->text,
        'users_id' => $faker->randomElement($user),
    ];
});
