<?php
//pulls in dbLib.php which has all the user settings
include_once('dbLib.php');
//extracts php headers and creates array
extract($_REQUEST);
//calls register function with all info from php headers as paramaters
$stat= register($name, $email, $password);
//returns a json with the status from register function to ajax
echo(json_encode($stat));

//initializes register function with three parameters
function register($name, $email, $password){


	
	//check for user table
	//if it doesn't exist, create it (first time this script is run)


	//validation
	if(!isset($email)){
		$response = array("status"=>"fail", "resp"=>"Please send afRegEmail ");

		return $response;
	}
	if(!isset($name)){
		$response = array("status"=>"fail", "resp"=>"Please send a afRegName ");

		return $response;
	}

	if(!isset($password)){
		$response = array("status"=>"fail", "resp"=>"Please send a afRegPassword ");

		return $response;
	}



	//encrpyt password
	$password=md5($password);
	$ipAddress=$_SERVER['REMOTE_ADDR'];
	//echo('ip='.$ipAddress);

	$allUsers = dbMassData("SELECT * FROM users WHERE email = '$email'");
	if($allUsers==null){
		dbQuery("INSERT INTO users (name, email, password, ipAddress) VALUES ('$name', '$email', '$password', '$ipAddress')");
		

		$resp = array("status"=>"success");
		//now login user
		
		session_id();
		session_start();
		$_SESSION['userId']= $userInfo[0]['rId'];
		$_SESSION['uId']= $userInfo[0]['rId'];
		$_SESSION['name']= $userInfo[0]['name'];
		$_SESSION['email']= $userInfo[0]['email'];
		$_SESSION['originalIP']= $userInfo[0]['ipAddress'];

		return json_encode($resp);

	
		

		//return $response;

	}

	else{
		$response = array("status"=>"fail", "resp"=>"emailTaken");

		
		return json_encode($response);


	}
}

?>