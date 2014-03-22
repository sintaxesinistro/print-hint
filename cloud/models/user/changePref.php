<?php
	include_once('/home/content/80/11356380/html/3d/cloud/models/main/index.php');

	function changePref($userId, $accountType, $notificationSettings, $emailPreferences, $following, $address, $phone){

		//$pref = dbMassData("SELECT * FROM userPreferences WHERE userId = '$userId'")

		//$pref[0]['accountType'] = $accountType
		//$pref[0]['notificationSettings'] = $notificationSettings
		//$pref[0]['emailPreferences'] = $emailPreferences
		//$pref[0]['following'] = $following
		//$pref[0]['address'] = $address
		//$pref[0]['phone'] = $phone

		dbQuery("INSERT INTO userPreferences (accountType, notificationSettings, emailPreferences, following, address, phone) WHERE userId = $userId VALUES ($accountType, $notificationSettings, $emailPreferences, $following, $address, $phone)");

		$resp = array('status'=>'success');
	}
?>