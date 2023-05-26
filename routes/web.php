<?php

use App\Http\Livewire\AboutCats;
use Illuminate\Support\Facades\Route;
use App\Http\Livewire\Homepage;
use App\Http\Livewire\MostPopularCat;
use App\Http\Livewire\ShowCat;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::group([
    'as' => 'cats.'
], function () {
    Route::get('/', Homepage::class)->name('home');
    Route::get('/about', AboutCats::class)->name('about');
    Route::get('/most-popular', MostPopularCat::class)->name('most-popular');
    Route::get('/{id}', ShowCat::class)->whereAlphaNumeric('id')->name('show');
});
