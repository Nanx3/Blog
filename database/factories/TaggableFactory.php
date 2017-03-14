<?php

use App\Tag;
use App\Post;

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

$factory->define(App\Taggable::class, function (Faker\Generator $faker) {
    $tag = DB::table('tags')->lists('id');
    $post = DB::table('posts')->lists('id');
    return [
        'tag_id' => $faker->randomElement($tag),
        'taggable_id' => $faker->randomElement($post),
        'taggable_type' => $faker->randomElement(['App\Post']),
    ];
});
