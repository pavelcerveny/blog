<?php

namespace App\Http\Controllers;

use App\Post;
use App\User;
use Cocur\Slugify\Slugify;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function posts($limit = 5) {
      $posts = Post::limit($limit)->get();
      return response()->json($posts, 200);
    }

    public function addPost(Request $request) {
      $slug = new Slugify();
      $newPost = new Post([
        "title" => $request->input('title'),
        "url" => $slug->slugify($request->input('title')),
        "preview" => '',
        "content" => $request->input('content')
      ]);
      $newPost->user()->associate(User::find(1));
      $newPost->save();

      return response()->json($newPost, 200);
    }

    public function getPost($url) {
      $post = Post::where('url', $url)->first();
      return response()->json($post, 200);
    }
}
