<?php
	
	include_once('/home/content/80/11356380/html/3d/cloud/models/addPref.php');

	extract($_REQUEST);

	$userId = $_REQUEST['userId'];
	$accountType = $_REQUEST['accountType'];
	$notificationSettings = $_REQUEST['notificationSettings'];
	$emailPreferences = $_REQUEST['emailPreferences'];
	$following = $_REQUEST['following'];
	$address = $_REQUEST['address'];
	$phone = $_REQUEST['phone'];


	if ($userId == 'Blank'){
		$resp = array('status'=>'fail','reason'=>'id');
		return json_encode($resp);
	}
	if ($accountType == 'Blank'){
		$resp = array('status'=>'fail','reason'=>'accountType');
		return json_encode($resp);
	}
	if ($notificationSettings == 'Blank'){
		$resp = array('status'=>'fail','reason'=>'notificationSettings');
		return json_encode($resp);
	}
	if ($emailPreferences == 'Blank'){
		$resp = array('status'=>'fail','reason'=>'emailPreferences');
		return json_encode($resp);
	}
	if ($address == 'Blank'){
		$resp = array('status'=>'fail','reason'=>'address');
		return json_encode($resp);
	}
	if ($phone == 'Blank'){
		$resp = array('status'=>'fail','reason'=>'phone');
		return json_encode($resp);
	}
	$resp = changePref($userId, $accountType, $notificationSettings, $emailPreferences, $following, $address, $phone);
	return json_encode($resp);
?>