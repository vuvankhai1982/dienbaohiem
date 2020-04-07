<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Contact extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @var array
     */
    private $data;

    public function __construct(array $data)
    {
        $this->data = $data;
    }

    public function build()
    {
        return $this
            ->from('pckhienxx@gmail.com')
            ->to('pckhien@gmail.com')
            ->cc(['pckhien1@gmail.com', 'pckhien2@gmail.com'])
            ->subject("[Liên hệ] " .'Liên hệ từ khách hàng')
            ->markdown('emails.contact', [
                'name' => $this->data['name'],
                'phone' => $this->data['phone'],
                'email' => $this->data['email'],
                'content' => $this->data['content'],
            ]);
    }
}
