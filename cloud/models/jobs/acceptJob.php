<?php
	

	include_once('/home/content/80/11356380/html/3d/cloud/models/main/index.php');




		//DEGUG
		//$resp = acceptJob('2', '3');
		//echo(json_encode($resp));
		//print_r($resp);


	
	function acceptJob($userId, $jobId){

		$userId = intval($userId);
		$jobId  = intval($jobId);
		$thisJob = dbMassData("SELECT * FROM jobs WHERE rId = $jobId");
		
		if($thisJob == NULL){

			$resp = array('status'=>'fail', 'reason'=>'no job matches is jobs table');		
			return($resp);
		}

		dbQuery("UPDATE jobs SET repairerId = '$userId' WHERE rId = $jobId");
		$resp = array('status'=>'success');
		return($resp);

		/* INTO jobs ( repairerId, status) WHERE VALUES ($repairerId, $status");
		$resp = array('status'=>'success');
		return $resp;

		*/
	}
?>