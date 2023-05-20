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

$cars = $bdconn->prepare("DELETE  FROM voitures Where `id`='$id'");
$retour=$cars->execute();

if($retour)
{
    $success = (object) [
        'success' => 'Votre voiture a été suprrimée avec succée'
    ];

    $successJson=json_encode($success);
    print_r($successJson);
    }
    else 
    {
        $error = (object) [
            'error' => 'erreur de suppression'
        ];
        $errorJson=json_encode($error);

        print_r($errorJson);
    }

?>
