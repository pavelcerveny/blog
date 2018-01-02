<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
  public $timestamps = false;

  protected $fillable = [
    'tag', 'frequency'
  ];

  public function categories()
  {
    return $this->belongsToMany('App\Category');
  }

  public function posts()
  {
    return $this->belongsToMany('App\Post');
  }
}
