<?php

namespace App\Http\Controllers\Data;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{

    public function index()
    {
        return response("The owls are not what they seem");
    }

}
