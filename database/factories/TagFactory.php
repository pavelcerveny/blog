<?php

use Faker\Generator as Faker;

/* @var Illuminate\Database\Eloquent\Factory $factory */

$factory->define(App\Tag::class, function (Faker $faker) {
    return [
        'tag' => $faker->word,
        'frequency' => $faker->randomNumber(2)
    ];
});
