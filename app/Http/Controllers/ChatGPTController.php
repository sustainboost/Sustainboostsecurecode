<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ChatGPTService;

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
}
