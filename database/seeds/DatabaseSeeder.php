<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

      $tags = factory(App\Tag::class, 40)->create();
      $categories = factory(App\Category::class, 10)->create();

      $categories->each(function ($u, $key) use ($tags){
        $u->tags()->save($tags[$key]);
        $u->tags()->save($tags[$key + 1]);
      });

      $posts = factory(App\Post::class, 10)->create();
      $comments = factory(App\Comment::class, 10)->create();
      $users = factory(App\User::class, 10)->create();

      $posts->each(function ($u, $key) use ($tags, $comments, $users){
        $u->tags()->save($tags[$key]);
        $u->comments()->save($comments[$key]);
        $u->user()->associate($users[$key]);
      });

      $users->each(function ($u, $key)  use ($comments, $posts){
        $u->posts()->save($posts[$key]);
        $u->comments()->save($comments[$key]);
      });

    }
}
