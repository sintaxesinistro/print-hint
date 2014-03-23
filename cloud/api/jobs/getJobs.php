<?php
	include_once('/home/content/80/11356380/html/3d/cloud/models/jobs/getJobs.php');
		
	session_start();
	$userId = $_SESSION['userId'];
	if(!isset($userId)){

		$resp = array("status"=>"fail", "reason"=>"user not logged in");
		//return json
		echo(json_encode($resp));
		return;
	}
		
	$apiResp = getJobs();
	$resp = array('status'=>'success', 'data'=>$apiResp);
	echo(json_encode($resp));
	return;
		
?>