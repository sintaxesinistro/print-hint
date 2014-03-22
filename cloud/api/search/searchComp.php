<?php
	include_once('/home/content/80/11356380/html/3d/cloud/models/search/searchComp/php');

	extract($_REQUEST);
	$resp= array(0);
	array_push($resp, searchComp($searchTerm));
	if($resp[1] == null){
		$resp[0] = ('status'=>'fail');
		return json_encode($resp);
	}
	else{
		$resp[0] = ('status'=>'success');
		return json_encode($resp);
	}
	
?>