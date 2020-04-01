<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
public function  trangchu(){
    return view('page.trangchu');
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
public function sanpham(){
    return view('page.sanpham');
}
public function baogia(){
    return view('page.baogia');
}
}
