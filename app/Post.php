<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['title','slug','description'];

    public function tags()
    {
        // Relation between Post and Tag through taggable table
        return $this->morphToMany('App\Tag', 'taggable');
    }

    public function users()
    {
        return $this->belongsTo('App\User');
    }
}
