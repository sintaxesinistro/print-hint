<?php

	include_once('/home/content/80/11356380/html/3d/cloud/models/main/index.php');

	//DEBUG
	//$resp = addPref('2', 'novice', 'none', 'mf@gmail.com', 'blank', '07410', '201274');
	//echo(json_encode($resp));

	function addPref($userId, $accountType, $notificationSettings, $emailPreferences, $following, $address, $phone){

		$pref = dbMassData("SELECT * FROM userPreferences WHERE userId = $userId");
		if($pref==null){
			dbQuery("INSERT INTO userPreferences (userId, accountType, notificationSettings, emailPreferences, following, address, phone) VALUES ($userId, $accountType, $notificationSettings, $emailPreferences, $following, $address, $phone)");
			$resp = array('status'=>'success', 'data'=>'preferences saved');
			return($resp);
		}
		else{
			$resp = array('status'=>'fail', 'reason'=>'something went horribly wrong');
			return($resp);
		}
		
	}

?>