<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\User;

class DashboardController extends Controller
{
    //Get user information
    public function getUser()
    {
        $user = User::findOrFail(Auth::user()->id);
        return $user;
    }
}
