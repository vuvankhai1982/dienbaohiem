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
Route::get('/gioi-thieu', 'HomeController@gioiThieu');
Route::get('/san-pham/{nameAndId}', 'HomeController@sanPham');
Route::get('/ho-tro-khach-hang', 'HomeController@hoTroKhachHang');
Route::get('/tuyen-dung', 'HomeController@tuyenDung')->name('tuyen_dung');
Route::get('/lien-he', 'HomeController@lienHe');
Route::get('/tin-tuc', 'HomeController@tinTuc');
Route::get('/tin-tuc/{nameAndId}', 'HomeController@showPost')->name('show_post');

Route::post('/contact', 'HomeController@sendContact')->name('send_contact');

Route::get('/bai-viet/danh-sach', 'HomeController@getPosts')->name('get_posts');
Route::get('/bai-viet/chyen-muc/{tagNameAndId}', 'HomeController@getPostsByTask')->name('get_posts_by_task');
//Route::get('/bai-viet/{nameAndId}', 'HomeController@showPost')->name('show_post');


Route::group(['prefix' => 'admin'], function() {
    Auth::routes([
        'register' => false,
    ]);
    Route::get('/','HomeController@admin');
});

Route::prefix('admin')
    ->as('admin.')
    ->middleware('auth')
    ->namespace('Admin')->group(function () {

    Route::get('/index', 'HomeController@index')->name('dashboard');

    Route::get('posts/gioi-thieu', 'PostController@gioiThieu')->name('gioi_thieu');
    Route::get('posts/lien-he', 'PostController@lienHe')->name('lien_he');

    Route::get('san-pham/{nameAndId}', 'PostController@sanPham')->name('sp');

    Route::resource('posts', 'PostController');
});

