<?php

include_once('dbLib.php');
extract($_REQUEST);
loginUser($email, $password);



//$resp = loginUser('m@140ventures.com', 'popcorn1');
//print_r($resp);

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

	$userInfo = dbMassData("SELECT * FROM users WHERE email = '$email' AND password='$password'");
	//echo("SELECT * FROM users WHERE email = '$email' AND password='$password'");
	if($userInfo!=NULL){

		session_id();
		session_start();
		$_SESSION['userId']= $userInfo[0]['rId'];
		$_SESSION['uId']= $userInfo[0]['rId'];
		$_SESSION['name']= $userInfo[0]['name'];
		$_SESSION['email']= $userInfo[0]['email'];
		$_SESSION['originalIP']= $userInfo[0]['ipAddress'];


		$response = array("status"=>"success", "resp"=>$_SESSION);
		
		
		echo json_encode($response);

	}

	else{
		$response = array("status"=>"fail", "resp"=>"notValidPair");

		
		echo json_encode($response);


	}
	
	}

?>