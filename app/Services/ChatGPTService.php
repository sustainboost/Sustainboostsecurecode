<?php

namespace App\Services;

use GuzzleHttp\Client;

class ChatGPTService
{
    protected $client;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => 'https://api.openai.com/v1/',
            'headers' => [
                'Authorization' => 'Bearer ' . env('OPENAI_API_KEY'),
                'Content-Type' => 'application/json',
            ],
        ]);
    }

    public function sendMessage(string $message)
    {
        $response = $this->client->post('chat/completions', [
            'json' => [
                'model' => 'gpt-4',
                'messages' => [
                    ['role' => 'user', 'content' => $message],
                ],
            ],
        ]);

        return json_decode($response->getBody(), true);
    }
}
