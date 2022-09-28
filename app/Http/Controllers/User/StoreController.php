<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StoreController extends Controller
{

    public function index()
    {
        return response()->json(data: '1111');
    }
}
