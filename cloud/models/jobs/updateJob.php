<?php
	include_once('/home/content/80/11356380/html/3d/cloud/models/main/index.php');

	//DEBUG
	//$resp = updateJob('2','3', 'inProgress', 'ordered new parts');
	//echo(json_encode($resp));

	function updateJob($jobId, $userId, $status, $update){
		$userId = intval($userId);
		$jobId = intval($jobId);
		
		$thisJob = dbMassData("SELECT * FROM jobs WHERE rId = $jobId");

		if($userId != $thisJob['requesterId'] || $userId = $thisJob['repairerId']){
			$resp = array('status'=>'failure', 'reason'=>'invalid id to view job');
			return($resp);
		}

		// $name = $thisJob['name'];
		// $description = $thisJob['description'];
		// $pictures = $thisJob['pictures'];
		// $amount = $thisJob['amount'];
		// $jobStreet = $thisJob['jobStreet'];
		// $jobCity = $thisJob['jobCity'];
		// $jobState = $thisJob['jobState'];
		// $jobZipcode = $thisJob['jobZipcode'];
		// $requesterId = $thisJob['requesterId'];
		// $repairerId = $userId;


		if($thisJob == NULL){
			$resp = array('status'=>'fail', 'reason'=>'no job matches');
			return($resp);
		}

		$thisJob['update'] = array();
		array_push($thisJob['update'], "('when'=>'timestamp', 'user'=>$userID, 'update'=> $update)");
		$resp = array('status'=>'success', 'data'=>'everything worked out');
		
	}
?>

<!-- [[timestamp,'user'=>'$userId', 'update'=>$update],[timestamp,'user'=>'$userId', 'update'=>$update],[timestamp,'user'=>'$userId', 'update'=>$update]] -->