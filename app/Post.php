<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
  protected $fillable = [
    'title', 'url', 'content', 'preview'
  ];

  public function user()
  {
    return $this->belongsTo('App\User');
  }

  public function comments()
  {
    return $this->hasMany('App\Comment');
  }

  public function images()
  {
    return $this->hasMany('App\Image');
  }

  public function tags()
  {
    return $this->belongsToMany('App\Tag');
  }
}
