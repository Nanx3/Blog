<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\TagRequest;
use App\Tag;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //Query to obtain all the tags with their user relationship
        $tags = Tag::orderBy('updated_at', 'desc')->get();
        return $tags;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //Query to obtain a tag with their user relationship
        $tags = Tag::findOrFail($id);
        return $tags;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TagRequest $request)
    {
        //Transaction to create record
        DB::transaction(function () use ($request)
        {
            $tag = new Tag();
            $tag = $this->assign($tag,$request);
            $tag->save();
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
    public function update(TagRequest $request, $id)
    {
        //Transaction to update record
        DB::transaction(function () use ($request,$id)
        {
            $tag = Tag::findOrFail($id); //If the record is already exist
            $tag = $this->assign($tag,$request);
            $tag->save();
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
        $tag = Tag::findOrFail($id); //Finding Tag id

        //Transaction to delete record
        DB::transaction(function() use ($tag) {
            $tag->delete();
        });
        return response()->json(['success' => true]);
    }

    //Delete all the records
    public function deleteAllTag(Request $request)
    {

        foreach($request->id as $id)
        {
            $tag = Tag::findOrFail($id);
            try {
                $tag->delete();
            } catch (PDOException  $e) {
                return response()->json(['success' => false]);
            }
        }
        return response()->json(['success' => true]);
    }

    public function assign($tag,$request)
    {
        $tag->name = $request->name;
        return $tag;
    }
}
