<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
  protected $fillable = [
    'name',
    'url',
    'title',
    'location',
    'caption',
    'mime',
    'type',
    'charset',
    'tags',
    'width',
    'height',
    'size',
    'path',
  ];

  public function user()
  {
    return $this->belongsTo('App\User');
  }
}
