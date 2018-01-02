<?php

use Faker\Generator as Faker;

/* @var Illuminate\Database\Eloquent\Factory $factory */

$factory->define(App\Post::class, function (Faker $faker) {

  return [
    'title' => $faker->sentence(6),
    'url' => $faker->url,
    'content' => $faker->randomHtml(1, 4),
    'preview' => $faker->randomHtml(1, 1),
    'user_id' => factory(App\User::class)->create()->id,
  ];
});
