<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Taggable extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['taggable_type','tag_id', 'taggable_id'];

}
