<?php
	include_once('/home/content/80/11356380/html/3d/cloud/models/search/searchDirect.php');

	extract($_REQUEST);
	$resp= array(0);
	array_push($resp, searchDirect($searchTerm));
	if($resp[1] == null){
		$resp[0] = ('status'=>'fail');
		return json_encode($resp);
	}
	else{
		$resp[0] = ('status'=>'success');
		return json_encode($resp);
	}
	
?>