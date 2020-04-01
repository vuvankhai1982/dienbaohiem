<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function(){
    return view('index');
});
Route::get('/about', function(){
    return view('about');
});*/
Route::get('/', 'PageController@trangchu')->name('trangchu');
Route::get('/gioithieu', 'PageController@gioithieu')->name('gioithieu');
Route::get('/blog', 'PageController@blog')->name('blog');
Route::get('/lienhe', 'PageController@lienhe')->name('lienhe');
Route::get('/sanpham', 'PageController@sanpham')->name('sanpham');
Route::get('baogia', 'PageController@baogia')->name('baogia');
