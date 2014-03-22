<?php

	include_once('/home/content/80/11356380/html/3d/cloud/models/main/index.php');

	function getPref($userId){
		$resp = array(0);
		array_push($resp, dbMassData("SELECT * FROM userPreferences WHERE  userId = $userId"););
		if (is_null($resp[1]){
			$resp[0] = ('status'=>'fail');
			return $resp;
		}
		else{
			$resp[0] = ('status'=>'success')
			return $resp;
		}
	}
	
?>