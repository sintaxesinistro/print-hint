<?php

  include_once('/home/content/80/11356380/html/3d/cloud/models/main/index.php');

  //DEBUG
  //$resp = searchDirect('3D');
  //echo(json_encode(($resp)));
  
  function searchDirect($searchTerm){

  	$searchResults = dbMassData("SELECT * FROM directory WHERE name LIKE '%$searchTerm%' OR type LIKE '%$searchTerm%'");

  	if ($searchResults == NULL){
  		$resp = array('status'=>'fail', 'reason'=>'nothing found');
  		return $resp;
  	}	
  	else {
  		$resp = array('status'=>'success', 'data'=>$searchResults);
  		return $resp;
  	}
    //$results = dbMassData("SELECT * FROM products WHERE name= '$term'")
    
  }
?>