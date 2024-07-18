<?php

namespace App\Http\Controllers;

use App\Models\Startup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StartupController extends Controller
{
    public function index()
    {
        return Startup::where('account_id', Auth::id())->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'startup_name' => 'required|string|max:255',
            'startup_description' => 'required|string',
            'startup_location' => 'required|string|max:255',
            'startup_size' => 'required|integer',
            'creation_date' => 'required|date',
            'startup_capital' => 'required|numeric',
            'startup_owner' => 'required|string|max:255',
        ]);

        $startup = Startup::create([
            'startup_name' => $request->startup_name,
            'startup_description' => $request->startup_description,
            'startup_location' => $request->startup_location,
            'startup_size' => $request->startup_size,
            'creation_date' => $request->creation_date,
            'startup_capital' => $request->startup_capital,
            'startup_owner' => $request->startup_owner,
            'account_id' => Auth::id(),
        ]);

        return response()->json(['message' => 'Startup created successfully.', 'startup' => $startup], 201);
    }

    public function show(Startup $startup)
    {
        $this->authorize('view', $startup);
        return response()->json($startup);
    }

    public function update(Request $request, Startup $startup)
    {
        $this->authorize('update', $startup);

        $request->validate([
            'startup_name' => 'required|string|max:255',
            'startup_description' => 'required|string',
            'startup_location' => 'required|string|max:255',
            'startup_size' => 'required|integer',
            'creation_date' => 'required|date',
            'startup_capital' => 'required|numeric',
            'startup_owner' => 'required|string|max:255',
        ]);

        $startup->update($request->all());

        return response()->json(['message' => 'Startup updated successfully.', 'startup' => $startup]);
    }
}
