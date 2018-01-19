<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class ImageController extends Controller
{
    public function uploadImage(Request $request) {

      if ($request->hasFile('image')) {

        $input = $request->file('image');

        $image = Image::make($input->getRealPath());

        $data = [
          'name' => $input->getClientOriginalName(),
          'title' => $request->input('title'),
          'mime' => $image->mime(),
          'width' => $image->width(),
          'height' => $image->height(),
          'type' => 'original',
          'size' => $image->filesize(),
          'location' => 'local'
        ];

        $path = $input->store('images');
        $data['path'] = $path;
        $data['url'] = url('/api/image').'/'.$input->hashName();

        $newImage = new \App\Image($data);
        $newImage->user()->associate(User::find(1));
        $newImage->save();

        return response()->json(["success" => true], 200);
      }
    }

    public function getImage($filename) {
      return Image::make(Storage::get('images/'.$filename))->response();
    }
}
