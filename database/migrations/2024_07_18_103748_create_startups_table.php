<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStartupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('startups', function (Blueprint $table) {
            $table->id();
            $table->string('startup_name');
            $table->text('startup_description');
            $table->string('startup_location');
            $table->integer('startup_size');
            $table->date('creation_date');
            $table->decimal('startup_capital', 15, 2);
            $table->string('startup_owner');
            $table->unsignedBigInteger('account_id');
            $table->timestamps();
            $table->foreign('account_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('startups');
    }
}
