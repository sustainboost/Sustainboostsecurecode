<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Mail\WelcomeEmail;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\StartupController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;

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
Route::get('/test-email', function () {
    $user = new \App\Models\User([
        'name' => 'Test User',
        'email' => 'sustainboost@gmail.com',
        'role' => 'buyer',  // Example role
    ]);

    Mail::to($user->email)->send(new WelcomeEmail($user));

    return 'Test email sent';
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Dashboard route
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Profile routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Startup routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::post('/startups', [StartupController::class, 'store'])->name('startups.store');
    Route::get('/startups', [StartupController::class, 'index'])->name('startups.index');
    Route::get('/startups/{startup}', [StartupController::class, 'show'])->name('startups.show');
    Route::put('/startups/{startup}', [StartupController::class, 'update'])->name('startups.update');
});

// Web routes for frontend navigation
Route::middleware(['auth', 'verified'])->get('/startups/{any}', function () {
    return Inertia::render('Startups');
})->where('any', '.*');

// Add the landing page route
Route::get('/landing', function () {
    return Inertia::render('Landing');
})->name('landing');

// Page de Etude de marché 
Route::get('/faire_une_etude', function () {
    return Inertia::render('Etude_marche/Etude_marche');
})->name('EtudePage');

// Email verification routes
Route::get('/email/verify', function () {
    return Inertia::render('Auth/VerifyEmail');
})->middleware('auth')->name('verification.notice');

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();

    return redirect('/dashboard');
})->middleware(['auth', 'signed'])->name('verification.verify');

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();

    return back()->with('status', 'verification-link-sent');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

require __DIR__.'/auth.php';
