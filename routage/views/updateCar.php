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
if(!empty($_POST))
{
    //$errorJson=json_encode($_POST);
            
   $id=$_POST['id'];
    $nom=$_POST['nom'];
    $marque=$_POST['marque'];
    $photo=$_FILES['photo'];
    $matricule=$_POST['matricule'];

    if($photo['type'][0]!=='image/jpeg')
    {
        $error = (object) [
            'error' => 'Il faut uploader une photo .jpeg'
        ];
        $errorJson=json_encode($error);
            print_r($errorJson);
    }
    elseif($photo['size'][0]>1000906)
    {
        $error = (object) [
            'error' => 'photo volumineuse Max (30ko)'
        ];
        $errorJson=json_encode($error);
            print_r($errorJson);
    }
    elseif($photo['error'][0]!==0)
    {
        $error = (object) [
            'error' => 'probleme upload !!!'
        ];
        $errorJson=json_encode($error);
            print_r($errorJson);
    }
    else
    {
        $nomphoto=time()."_".$photo['name'][0];
        $tmpnomphoto=$photo['tmp_name'][0];
        $urlUpload="../efeCoding/reactjs/reactjs1/app1/public/assets/img/";
        if(move_uploaded_file($tmpnomphoto,$urlUpload.$nomphoto))
        {
            $cars = $bdconn->prepare("UPDATE `voitures` SET `nom` = '$nom', `marque` = '$marque', `photo` = '$nomphoto', `matricule` = '$matricule' WHERE `voitures`.`id` = $id;");
            $cars->execute();
        
            $success = (object) [
                'success' => 'Votre voiture a été ajoutée avec succée'
            ];
        
            $successJson=json_encode($success);
            print_r($successJson);
        }
        else
        {
            $error = (object) [
                'error' => 'probleme upload 2 !!!'
            ];
            $errorJson=json_encode($error);
            print_r($errorJson);
        }
    }
    }
    else 
    {
        $error = (object) [
            'error' => 'Il faut remplir le formulaire'
        ];
        $errorJson=json_encode($error);

        print_r($errorJson);
    }

?>
