<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\PostRequest;
use App\Post;
use App\Tag;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //Query to obtain all the posts with their user relationship
        $posts = Post::orderBy('updated_at', 'desc')->with('users')->get();
        return $posts;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //Query to obtain a post with their user relationship
        $posts = Post::with('users','tags')->findOrFail($id);
        return $posts;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostRequest $request)
    {
        //Transaction to create record
        DB::transaction(function () use ($request)
        {
            $post = new Post();
            $post = $this->assign($post,$request);
            $post->save();
            $post->tags()->sync($request->tags); //Create the relation

        });
        return response()->json(['success' => true]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PostRequest $request, $id)
    {
        //Transaction to update record
        DB::transaction(function () use ($request,$id)
        {
            $post = Post::findOrFail($id); //If the record is already exist
            $post = $this->assign($post,$request);
            $post->save();
            $post->tags()->sync($request->tags); //Create the relation
        });
        return response()->json(['success' => true]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::findOrFail($id); //Finding Post id

        //Transaction to delete record
        DB::transaction(function() use ($post) {
            $post->delete();
        });
        return response()->json(['success' => true]);
    }


    //Load the tags
    public function getTags()
    {
        $tags = Tag::select(['id as value','name as label'])->orderBy('name', 'asc')->get(); //Select format
        return $tags;
    }

    //Delete all the records
    public function deleteAllPost(Request $request)
    {

        foreach($request->id as $id)
        {
            $post = Post::findOrFail($id);
            try {
                $post->delete();
            } catch (PDOException  $e) {
                return response()->json(['success' => false]);
            }
        }
        return response()->json(['success' => true]);
    }

    public function assign($post,$request)
    {
        $post->title = $request->title;
        $post->slug = str_slug($request->title);
        $post->description = $request->description;
        $post->users()->associate(Auth::user()); //Associate the user to the post
        return $post;
    }
}
