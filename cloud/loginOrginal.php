<?php

include_once('settings.php');
include_once('dbLib.php');
include_once('dbShortcuts.php');

//$resp = loginUser('m@140ventures.com', 'popcorn1');
//print_r($resp);
	loginUser($email, $password);
	function loginUser($email, $password){

		if(!isset($email)){
		$response = array("status"=>"fail", "resp"=>"Please send afLoginEmail ");

		
		return $response;
	}


	if(!isset($password)){
		$response = array("status"=>"fail", "resp"=>"Please send a afLoginPassword ");

		
		return $response;
	}



	//encrpyt password
	$password=md5($password);
	$ipAddress=$_SERVER['REMOTE_ADDR'];
	//echo('ip='.$ipAddress);

	$userInfo = dbMassData("SELECT * FROM User WHERE email = '$email' AND password='$password'");
	if($userInfo!=null){

		session_id();
		session_start();
		$_SESSION['userId']= $userInfo[0]['rId'];
	

		$response = array("status"=>"success", "resp"=>$_SESSION);
		
		
		return $response;

	}

	else{
		$response = array("status"=>"fail", "resp"=>"notValidPair");

		
		return $response;


	}
	
	}

?>