<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json; charset=utf-8');
try
{
	// On se connecte à MySQL
	$bdconn = new PDO('mysql:host=localhost;dbname=garage;charset=utf8', 'root', '');
}
catch(Exception $e)
{
	// En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : '.$e->getMessage());
}

$events = $bdconn->prepare('SELECT * FROM events');
$events->execute();
//$cars = $cars->fetchAll();
$events = $events->fetchAll(PDO::FETCH_ASSOC);

$eventsJson=json_encode($events);

print_r($eventsJson);
/*
// On affiche chaque recette une à une
foreach ($recipes as $recipe) {
?>
    <p><?php echo $recipe['author']; ?></p>
<?php
}
*/
?>
