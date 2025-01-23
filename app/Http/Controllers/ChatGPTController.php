<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ChatGPTService;
use Illuminate\Support\Facades\Http;

class ChatGPTController extends Controller
{
    protected $chatGPTService;

    public function __construct(ChatGPTService $chatGPTService)
    {
        $this->chatGPTService = $chatGPTService;
    }

    public function chat(Request $request)
    {
        $request->validate(['message' => 'required|string']);

        try {
            $response = $this->chatGPTService->sendMessage($request->message);
            return response()->json($response);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to communicate with ChatGPT'], 500);
        }
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
                    ['role' => 'user', 'content' => $prompt],
                ],
                'max_tokens' => 30,
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
