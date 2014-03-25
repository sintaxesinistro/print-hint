<?php


include_once('settings.php');

include_once('dbLib.php'); 

include_once('dbShortcuts.php');

	for($k=117; $k<299; $k++){
		$url = "http://api.crunchbase.com/v/1/search.js?query=3d&page=".$k."&api_key=6zhgsuk3cq4jw4hap9hrdtpd";
		$jsondata = file_get_contents($url);
		$comArray = json_decode($jsondata, true);

		for($i=0; $i<count($comArray['results']); $i++) {
			
			$compInfo = array();
			$compInfo['name'] = $comArray['results'][$i]['name'];
			$compInfo['category'] = $comArray['results'][$i]['category_code'];
			$compInfo['homepage'] = $comArray['results'][$i]['homepage_url'];
			$compInfo['description'] = $comArray['results'][$i]['description'];
			$compInfo['namespace'] = $comArray['results'][$i]['namespace'];
			$compInfo['overview'] = $comArray['results'][$i]['overview'];
			//$compInfo['images'] = $comArray['results'][$i]['image'];
			//$compInfo['office'] = $comArray['results'][$i]['office'];
		
			//rollAdd
			$tableName='companies';
			$fieldsArr= $compInfo;
			$checkExists = TRUE;
			$print = TRUE;
			$checkAdded = FALSE;
			$updateBool = FALSE;
			$addNewFields = TRUE;

			rollAdd($tableName, $fieldsArr, $checkExists, $print ,$checkAdded, $updateBool, $addNewFields);
		}
		
	}
?>