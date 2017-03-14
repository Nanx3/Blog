<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name'];


    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */

    protected $hidden = ['tag_id'];


    public function posts()
    {
        // Relation between Post and Tag through taggable table
        return $this->morphToMany('App\Post', 'taggable');
    }

}
