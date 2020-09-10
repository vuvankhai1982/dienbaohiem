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
            ->from('pckhien+mrfinance.vn@gmail.com')
            ->to('lyminhdien@gmail.com')
            ->cc(['pckhien@gmail.com', 'khaihoan1982@gmail.com'])
            ->subject("[Liên hệ] " .'Liên hệ từ khách hàng')
            ->markdown('emails.contact', [
                'name' => $this->data['name'],
                'phone' => $this->data['phone'],
                'email' => $this->data['email'],
                'content' => $this->data['content'],
            ]);
    }
}
