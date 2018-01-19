<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('user/login', 'UserController@login');

Route::group(['middleware' => ['jwt']], function () {

  // Route::resource('/user', 'UserController');
  Route::prefix('user')->group(function () {

    Route::get('logout', 'UserController@logout');
    // Route::post('refresh', 'UserController@refresh');
    Route::get('me', 'UserController@me');
  });

});

Route::post('upload/image', 'ImageController@uploadImage');
Route::get('image/{filename}', 'ImageController@getImage');
Route::get('images', 'ImageController@images');

Route::get('posts/{limit?}', 'PostController@posts')->where('limit', '[0-9]+');
Route::get('posts/{url}', 'PostController@getPost');
Route::post('addPost', 'PostController@addPost');
