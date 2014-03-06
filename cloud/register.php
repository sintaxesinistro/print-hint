<?php

	include_once('settings.php');
	include_once('dbLib.php');
	include_once('dbShortcuts.php');

	extract($_REQUEST);
	
	$tableName='regUsers';
	$fieldsArr = array('email'=>$email, 'password'=>$password);
	$checkExists = FALSE;
	$print = TRUE;
	$checkAdded = FALSE;
	$updateBool = FALSE;
	$addNewFields = TRUE;

	rollAdd($tableName, $fieldsArr, $checkExists, $print ,$checkAdded, $updateBool, $addNewFields);
	
	echo('added');

	

?>