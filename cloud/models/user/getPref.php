<?php

	include_once('/home/content/80/11356380/html/3d/cloud/models/main/index.php');

	//DEBUG
	//$resp = getPref('2');
	//echo(json_encode($resp));

	function getPref($userId){

		$userId = intval($userId);
		//$resp = array(0, 0);
		//array_push($resp, dbMassData("SELECT * FROM userPreferences WHERE  rId = $userId"));
		$data =  dbMassData("SELECT * FROM userPreferences WHERE  rId = $userId ORDER BY timestamp DESC LIMIT 1");
		if($data != NULL){

			$resp=array("status"=>"success");
			$resp['data']=$data[0];
			return($resp);
		}
		else{
			$resp=array("status"=>"fail", "reason"=>"userID doesnt have any preference data");
			return($resp);
		}
	}
?>