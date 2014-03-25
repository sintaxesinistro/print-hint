<?php

	include_once('settings.php');
	include_once('dbLib.php');
	include_once('dbShortcuts.php');

	extract($_REQUEST);
	
	$tableName='jobs';
	$fieldsArr = array('name'=>$name, 'description'=>$description,'pictures'=>$pictures ,'amount'=>$amount, 'street'=> $street,'city'=> $city,'state'=> $state,'zipcode'=> $zipcode,'requesterId'=>$requesterId, 'repairerId'=>$repairerId, 'status'=>$status, 'update'=>$update);
	$checkExists = FALSE;
	$print = TRUE;
	$checkAdded = FALSE;
	$updateBool = FALSE;
	$addNewFields = TRUE;

	rollAdd($tableName, $fieldsArr, $checkExists, $print ,$checkAdded, $updateBool, $addNewFields);
	
	echo('added');

	

?>