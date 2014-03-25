<?php
	include_once('/home/content/80/11356380/html/3d/cloud/models/jobs/addJob.php');
	//$resp = addJob
	extract($_REQUEST);

	session_start();
	$userId = $_SESSION['userId'];
	if(!isset($userId)){

		$resp = array("status"=>"fail", "reason"=>"user not logged in");
		//return json
		echo(json_encode($resp));
		return;
	}

	if($name == 'Blank'){
		$resp = array('status'=>'fail','reason'=>'name');
		echo json_encode($resp);
		return 
	}
	if($description == 'Blank'){
		$resp = array('status'=>'fail','reason'=>'description');
		return json_encode($resp);
	}
	if($aaa == 'Blank'){
		$resp = array('status'=>'fail','reason'=>'aaa');
		return json_encode($resp);
	}
?>