<?php

namespace App\Services;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

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

    public function handleChat(Request $request)
    {
        // Valider les données envoyées par le front-end
        $request->validate([
            'message' => 'required|string',
        ]);

        $prompt = $request->input('message');
        $apiKey = env('OPENAI_API_KEY');

        try {
            // Appeler l'API de ChatGPT
            $response = Http::withHeaders([
                'Authorization' => "Bearer {$apiKey}",
            ])->post('https://api.openai.com/v1/chat/completions', [
                'model' => 'gpt-4o-mini',
                'messages' => [
                    ['role' => 'system', 'content' => 'You are a helpful assistant.'],
                    ['role' => 'user', 'content' => $prompt],
                ],
                'max_tokens' => 500,
                'temperature' => 0.7,
            ]);

            // Vérifier si l'appel est réussi
            if ($response->successful()) {
                return response()->json($response->json(), 200);
            }

            // En cas d'erreur API
            return response()->json([
                'error' => 'Erreur lors de la communication avec l\'API OpenAI',
                'details' => $response->json(),
            ], $response->status());
        } catch (\Exception $e) {
            // Gestion des exceptions
            return response()->json([
                'error' => 'Une erreur s\'est produite',
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}
