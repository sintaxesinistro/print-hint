<?php
	

	//include the needed models
	include_once('/home/content/80/11356380/html/3d/cloud/models/jobs/acceptJob.php');


	//extract request, so that each key in the request header becomes a varialble
	extract($_REQUEST);


	//if session is needed... check the session
	session_start();
	$userId = $_SESSION['userId'];
	if(!isset($userId)){

		$resp = array("status"=>"fail", "reason"=>"user not logged in");
		//return json
		echo(json_encode($resp));
		return;
	}

	//validate variables

	if(!isset($jobId)){
		$resp = array("status"=>"fail", "reason"=>"exiting... please send job Id");
		//return json
		echo(json_encode($resp));
		return;

	}

	$apiResp = acceptJob($userId, $jobId);
	$resp = array("status"=>"success", "data"=>$apiResp);

	//for AJAX callback (as transport.responseText)
	echo(json_encode($resp));

?>