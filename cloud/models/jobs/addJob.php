<?php
	include_once('/home/content/80/11356380/html/3d/cloud/models/main/index.php');


	//DEBUG
	//$resp = addJob('New', 'New', 'None', '50', '15-21 Everett Terrace', 'fair lawn', 'nj', '07410', '4', 'in progress', 'working on it' );
	//echo(json_encode($resp));

	function addJob($name, $description, $pictures, $amount, $jobStreet,$jobCity,$jobState, $jobZipcode, $requesterId, $status, $update){

		dbQuery("INSERT INTO jobs (name, description, pictures, amount, jobStreet, jobCity, jobState, jobZipcode, requesterId, status, updates) VALUES ($name, $description, $pictures, $amount, $jobStreet, $jobCity, $jobState, $jobZipcode, $requesterId, $status, $update");
		$resp = array('status'=>'success', 'data'=>'job added');
		return $resp;
	}
?>