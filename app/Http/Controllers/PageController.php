<?php

namespace App\Http\Controllers;
use App\Models\Slider;
use App\Models\Tintuc;
use Illuminate\Http\Request;

class PageController extends Controller
{
public function  trangchu(){
    $slide = Slider::all();
    $tintuc = Tintuc::all();
     //   print_r($tintuc);
      //  exit;
    return view('page.trangchu', compact('slide', 'tintuc'));
}
public function  gioithieu(){
    return view('page.gioithieu');
}
public function blog(){
    return view('page.blog');
}
public function lienhe(){
    return view('page.lienhe');
}
public function goibaohiem(){
    return view('page.goibaohiem');
}
public function baogia(){
    return view('page.baogia');
}
public function ykien(){
    return view('page.ykien');
}


}
