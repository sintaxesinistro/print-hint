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
	if ($street == 'Blank'){
		$resp = array('status'=>'fail','reason'=>'street');
		echo json_encode($resp);
		return; 
	}
	if ($city == 'Blank'){
		$resp = array('status'=>'fail','reason'=>'city');
		echo json_encode($resp);
		return; 
	}
	if ($state == 'Blank'){
		$resp = array('status'=>'fail','reason'=>'state');
		echo json_encode($resp);
		return; 
	}
	if ($zipcode == 'Blank'){
		$resp = array('status'=>'fail','reason'=>'zipcode');
		echo json_encode($resp);
		return; 
	}
	if ($phone == 'Blank'){
		$resp = array('status'=>'fail','reason'=>'phone');
		echo json_encode($resp);
		return; 
	}
	
	$apiResp = changePref($userId, $accountType, $notificationSettings, $emailPreferences, $following, $street, $city, $state, $zipcode, $phone);
	$resp = array('status'=>'success', 'data'=>$apiResp);
	echo(json_encode($resp));
	return; 
?>