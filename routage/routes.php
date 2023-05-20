<?php

require_once __DIR__.'/router.php';

//GET
get('/', 'views/index.php');
get('/car/$id', 'views/car.php');
get('/cars/$marque', 'views/cars.php');

//POST Add
post('/car', 'views/addCar.php');

//POST Update
post('/car/update', 'views/updateCar.php');

//Delete
get('/car/delete/$id', 'views/deleteCar.php');

/*
get('/callback/$name/$last_name', function($name, $last_name){
  echo "Callback executed. The full name is $name $last_name";
});
*/



/******************** */

get('/events', 'views/events.php');
get('/events/$cat', 'views/eventsCat.php');

any('/404','views/404.php');
