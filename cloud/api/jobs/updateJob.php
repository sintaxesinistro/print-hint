<?php
	include_once('/home/content/80/11356380/html/3d/cloud/api/jobs/updateJob.php')

	extract($_REQUEST);

	session_start();
	$userId = $_SESSION['userId'];
	if(!isset($userId)){
		$resp = array("status"=>"fail", "reason"=>"user not logged in");
		//return json
		echo(json_encode($resp));
		return;
	}

	if($jobId == NULL){
		$resp = array('status'=>'fail', 'reason'=>'no job id');
		echo(json_encode($resp));
		return;
	}
	if($update == NULL){
		$resp = array('status'=>'fail', 'reason'=>'no update');
		echo(json_encode($resp));
		return;
	}
	if($status == NULL){
		$resp = array('status'=>'fail', 'reason'=>'no status');
		echo(json_encode($resp));
		return;
	}

	$apiResp = updateJob($jobId, $userId, $status, $update);
	$resp = array('status'=>'success', 'data'=>$apiResp);
?>