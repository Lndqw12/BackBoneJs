<?php

Route::get('/', function()
{
	return View::make('home.index');
})

Route::get('/tasks/(:num)', function($id)
{
	return json_encode( Mission::find($id) );
});

Route::put('/tasks/(:num)', function($id) {
	$input = Input::json();

	return $input->title;
}
?>