<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function posts() {
      return Post::limit(2)->get();
    }
}
