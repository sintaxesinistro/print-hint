<?php

	include_once('/home/content/80/11356380/html/3d/cloud/models/getPref.php')

	extract($_REQUEST);

	//$userID = $_REQUEST['userId']
	if ($userId == null){
		$resp = array('status'=>'fail', 'reason'=>'no id');
		return json_encode($resp);
	}
	else if ( $userId == 'undefined'){
		$resp = array('status'=>'fail', 'reason'=>'id not valid');
		return json_encode($resp);
	}
	else{
		json_encode(getPref($userId));
	}
	
?>