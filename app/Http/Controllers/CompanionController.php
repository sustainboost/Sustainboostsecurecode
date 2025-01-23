<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class CompanionController extends Controller
{
    public function chat(Request $request)
    {
        // Valider les données reçues
        $request->validate([
            'messages' => 'required|array',
            'messages.*.role' => 'required|string|in:user,assistant',
            'messages.*.content' => 'required|string',
        ]);

        $messages = $request->input('messages');

        // Initialiser le client HTTP
        $client = new Client();

        try {
            // Envoyer la requête à l'API OpenAI
            $response = $client->post('https://api.openai.com/v1/chat/completions', [
                'headers' => [
                    'Authorization' => 'Bearer ' . env('OPENAI_API_KEY'),
                    'Content-Type' => 'application/json',
                ],
                'json' => [
                    'model' => 'gpt-4', // Modèle à utiliser
                    'messages' => $messages,
                ],
            ]);

            return response()->json(json_decode($response->getBody(), true));
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
