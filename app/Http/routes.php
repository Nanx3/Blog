<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::auth();

Route::get('/', function () {
    return view('public');
});

Route::resource('public/blog', 'BlogController');

Route::group(['middleware' => ['auth']], function () {

    Route::get('admin', function () {
        return view('dashboard');
    });

//User information
    Route::get('admin/user', 'DashboardController@getUser');

//Fill select
    Route::get('tags/select', 'PostController@getTags');

//Delete all
    Route::delete('admin/post/deleteall', 'PostController@deleteAllPost');

//Delete all
    Route::delete('admin/tag/deleteall', 'TagController@deleteAllTag');

//RESTFUL
    Route::resource('admin/post', 'PostController');

    Route::resource('admin/tag', 'TagController');
});

