<?php
	include_once('/home/content/80/11356380/html/3d/cloud/models/main/index.php');

	function addJob($name, $description, $pictures, $amount, $jobAddress, $requesterId, $repairerId, $status, $progess){

		dbQuery("INSERT INTO jobs ( timestamp, name, description, pictures, amount, jobAddress, requesterId, status, progress) VALUES ($name, $description, $pictures, $amount, $jobAddress, $requesterId, $status, $progess");
		$resp = array('status'=>'success');
		return $resp;
	}
?>