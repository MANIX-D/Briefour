<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::get('/ping', function () {
    return response()->json(['message' => 'pong']);
});
//  Routes publiques
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
 // Déconnexion

//  Routes protégées par Sanctum
Route::middleware('auth:sanctum')->group(function () {
 Route::post('/logout', [AuthController::class, 'logout']);

    // Infos de l'utilisateur connecté
    Route::get('/user', function (Request $request) {
        return $request->user();
    });



    // Routes pour gérer les tâches
    // Route::get('/tasks', [TaskController::class, 'index']);
    // Route::post('/tasks', [TaskController::class, 'store']);
    // Route::put('/tasks/{id}', [TaskController::class, 'update']);
    // Route::delete('/tasks/{id}', [TaskController::class, 'destroy']);
    // Route::patch('/tasks/{id}/toggle', [TaskController::class, 'toggleStatus']);



});
