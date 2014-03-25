<?php

	include_once('settings.php');
	include_once('dbLib.php');
	include_once('dbShortcuts.php');

	extract($_REQUEST);
	
	$tableName='userPreferences';
	$fieldsArr = array('userId'=>$userId, 'accountType'=>$accountType, 'notificationSettings'=>$notificationSettings, 'emailPreferences'=> $emailPreferences, 'following'=>$following, 'street'=>$street,'city'=>$city,'state'=>$state,'zipcode'=>$zipcode, 'phone'=>$phone);
	$checkExists = FALSE;
	$print = TRUE;
	$checkAdded = FALSE;
	$updateBool = FALSE;
	$addNewFields = TRUE;

	rollAdd($tableName, $fieldsArr, $checkExists, $print ,$checkAdded, $updateBool, $addNewFields);
	
	echo('added');

	

?>