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

Route::get('/', 'HomeController@index')->name('home');

Route::post('/contact', 'HomeController@sendContact')->name('send_contact');

Route::get('/bai-viet/danh-sach', 'HomeController@getPosts')->name('get_posts');
Route::get('/bai-viet/{nameAndId}', 'HomeController@showPost')->name('show_post');

Route::prefix('admin')
    ->as('admin.')
    ->namespace('Admin')->group(function () {

    Route::get('/index', 'HomeController@index')->name('dashboard');

        Route::get('posts/gioi-thieu', 'PostController@gioiThieu')->name('gioi_thieu');
        Route::resource('posts', 'PostController');
});
