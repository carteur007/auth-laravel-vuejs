<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth as Auth;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    /**
     * Show the form for creating the resource.
     */
    public function register(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'surname' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => [
                'required',
                'confirmed',
                Password::min(8)->mixedCase()->numbers()->symbols()
            ]
        ]);
        /** @var \App\Models\User $user */
        $user = User::create([
            'name' => $data['name'],
            'surname' => $data['surname'],
            'phone' => $data['phone'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email|exists:users,email',
            'password' => [
                'required',
            ]
        ]);
        $remember = $credentials['rememberMe'] ?? false;
        unset($credentials['rememberMe']);
        if (!Auth::attempt($credentials, $remember)) {
            return response([
                'error' => 'Mot de passe ou nom d\'utilisateur incorrect'
            ], 422);
        }
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout()
    {
        /** @var \App\Models\User $user */
        $user = Auth::user();
        $user->currentAccessToken()->delete();

        return response([
            'success' => true
        ]);
    }
    public function profile()
    {
    }
    public function parametres()
    {
    }
}
