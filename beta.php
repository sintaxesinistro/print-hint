<?php

	include_once('settings.php');
	include_once('dbLib.php');

	extract($_REQUEST);
	
	if(!isset($email)){
		echo "no";
		return;
	}

	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	    echo "notValid";
	    return;
	}

	$ip = $_SERVER['REMOTE_ADDR'];

	dbQuery("INSERT INTO User (email, ip) VALUES ('$email', '$ip')");
	

?>