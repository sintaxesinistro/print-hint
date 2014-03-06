<?php

// your credentials
include_once('settings.php');

include_once('dbLib.php'); 

include_once('dbShortcuts.php');



extract($_REQUEST);

if(!isset($email) || !isset($password)){

	$response= array("status"=>"failed");
		echo(json_encode($response));
		return;
}

login($email, $password);
function login($email, $password){



	$correct = dbMassData("SELECT * FROM users WHERE email ='$email' AND password='$password'");
	if($correct == null){
		$response= array("status"=>"failed");
		echo(json_encode($response));


	}
	else{
		//password and email is correct
		$response= array("status"=>"success");
		echo(json_encode($response));
		$loginCount = dbMassData("SELECT loginCount FROM users WHERE email = '$email'") + 1
		$ip = $_SERVER['REMOTE_ADDR'];
		dbQUERY("INSERT INTO users(ip, loginCount) VALUES ($ip, $loginCount)");
	}
}




?>