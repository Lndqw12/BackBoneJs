<?php

Route::get('/', function()
{
	return View::make('home.index');
})

Route::get('/tasks', function()
{
	return json_encode( Mission::all() );
})
?>