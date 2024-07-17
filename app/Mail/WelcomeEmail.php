<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class WelcomeEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $user;

    public function __construct($user)
    {
        $this->user = $user;
    }

    public function build()
    {
        $view = 'emails.welcome_' . $this->user->role;
        
        return $this->view($view)->with([
            'name' => $this->user->name,  // Fixed reference to the class property
        ]);
    }
}
