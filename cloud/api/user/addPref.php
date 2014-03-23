<?php
	
	include_once('/home/content/80/11356380/html/3d/cloud/models/user/addPref.php');

	extract($_REQUEST);

	session_start();
	$userId=$_SESSION['userId'];
	if(!isset($userId)){
		$resp = array('status'=>'fail', 'reason'=>'user is not logged in');
		echo(json_encode($resp));
		return;
	}
	$accountType = $_REQUEST['accountType'];
	$notificationSettings = $_REQUEST['notificationSettings'];
	$emailPreferences = $_REQUEST['emailPreferences'];
	$following = $_REQUEST['following'];
	$address = $_REQUEST['address'];
	$phone = $_REQUEST['phone'];

	if ($accountType == 'Blank'){
		$resp = array('status'=>'fail','reason'=>'accountType');
		echo json_encode($resp);
		return;
	}
	if ($notificationSettings == 'Blank'){
		$resp = array('status'=>'fail','reason'=>'notificationSettings');
		echo json_encode($resp);
		return;
	}
	if ($emailPreferences == 'Blank'){
		$resp = array('status'=>'fail','reason'=>'emailPreferences');
		echo json_encode($resp);
		return; 
	}
	if ($address == 'Blank'){
		$resp = array('status'=>'fail','reason'=>'address');
		echo json_encode($resp);
		return; 
	}
	if ($phone == 'Blank'){
		$resp = array('status'=>'fail','reason'=>'phone');
		echo json_encode($resp);
		return; 
	}
	
	$apiResp = changePref($userId, $accountType, $notificationSettings, $emailPreferences, $following, $address, $phone);
	$resp = array('status'=>'success', 'data'=>$apiResp);
	echo(json_encode($resp));
	return; 
?>