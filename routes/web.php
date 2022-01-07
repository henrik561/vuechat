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

Route::get('/register', function () {
    return inertia('Register');
});

Route::get('/', function () {
    return redirect('/chat');
});

Route::get('/chat', function () {
    return inertia('Chat');
});

Route::get('/friends', function () {
    return inertia('Friends');
});

Route::get('/login', function () {
    return inertia('Auth/Login');
});

Route::get('/register', function () {
    return inertia('Auth/Register');
});