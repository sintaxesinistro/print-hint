<?php

	include_once('settings.php');
	include_once('dbLib.php');
	include_once('dbShortcuts.php');

	extract($_REQUEST);
	
	$tableName='directory';
	$fieldsArr = array('type'=>$type, 'name'=>$name, 'level'=>$level,'summary'=>$summary, 'link'=>$link, 'rnews'=>$rnews);
	$checkExists = FALSE;
	$print = TRUE;
	$checkAdded = FALSE;
	$updateBool = FALSE;
	$addNewFields = TRUE;

	rollAdd($tableName, $fieldsArr, $checkExists, $print ,$checkAdded, $updateBool, $addNewFields);
	
	echo('added');

	

?>

