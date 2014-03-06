<?php

	include_once('settings.php');
	include_once('dbLib.php');
	include_once('dbShortcuts.php');

	extract($_REQUEST);
	
	$tableName='jobs';
	$fieldsArr = array('name'=>$name, 'description'=>$description,'pictures'=>$pictures ,'amount'=>$amount, 'jobAddress'=> $jobAddress,'requesterId'=>$requesterId, 'repairerId'=>$repairerId);
	$checkExists = FALSE;
	$print = TRUE;
	$checkAdded = FALSE;
	$updateBool = FALSE;
	$addNewFields = TRUE;

	rollAdd($tableName, $fieldsArr, $checkExists, $print ,$checkAdded, $updateBool, $addNewFields);
	
	echo('added');

	

?>