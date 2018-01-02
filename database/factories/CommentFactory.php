<?php

use Faker\Generator as Faker;

/* @var Illuminate\Database\Eloquent\Factory $factory */

$factory->define(\App\Comment::class, function (Faker $faker) {
    return [
      'post_id' => $faker->numberBetween(1,10),
      'user_id' => $faker->numberBetween(1,10),
      'comment' => $faker->sentence(12)
    ];
});
