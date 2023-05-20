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

$cars = $bdconn->prepare("SELECT * FROM voitures Where `id`='$id'");
$cars->execute();
//$cars = $cars->fetchAll();
$cars = $cars->fetchAll(PDO::FETCH_ASSOC);

$carsJson=json_encode($cars);

print_r($carsJson);
/*
// On affiche chaque recette une à une
foreach ($recipes as $recipe) {
?>
    <p><?php echo $recipe['author']; ?></p>
<?php
}
*/
?>
