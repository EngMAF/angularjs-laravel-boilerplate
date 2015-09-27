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

Route::get('/', function () {
	// Clockwork::info('Message text.'); // 'Message text.' appears in Clockwork log tab
    return view('welcome');
});

Route::resource('item', 'ItemsController');