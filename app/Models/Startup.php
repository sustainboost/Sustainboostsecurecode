<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Startup extends Model
{
    use HasFactory;

    protected $fillable = [
        'startup_name',
        'startup_description',
        'startup_location',
        'startup_size',
        'creation_date',
        'startup_capital',
        'startup_owner',
        'account_id',
    ];

    /**
     * Get the user that owns the startup.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'account_id');
    }
}
