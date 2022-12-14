<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\StoreController;
use App\Http\Controllers\Data\IndexController;
use App\Http\Controllers\AuthController;

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
Route::group([
    'prefix' => 'users'
], function($router){
    Route::post('/', [ StoreController::class, 'index' ]);
});

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', [ AuthController::class, 'login' ]);
    Route::post('logout', [ AuthController::class, 'logout' ]);
    Route::post('refresh', [ AuthController::class, 'refresh' ]);
    Route::post('me', [ AuthController::class, 'me' ]);

    Route::group(['middleware' => 'jwt.auth'], function(){
        Route::group(['namespace' => 'Data', 'prefix' => 'data'], function(){
            Route::get('/', [ IndexController::class, 'index' ]);
        });
    });
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
