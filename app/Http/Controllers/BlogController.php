<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Post;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //Query to obtain all the posts with their user and tags relationship
        $posts = Post::orderBy('updated_at', 'desc')->with('users','tags')->get();
        return $posts;
    }
}
