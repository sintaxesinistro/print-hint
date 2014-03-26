<?php

  include_once('/home/content/80/11356380/html/3d/cloud/models/main/index.php');

  //DEBUG
  //$resp = searchComp('3D');
  //echo(json_encode(($resp)));
  
  function searchComp($searchTerm){


  	$searchResults = dbMassData("SELECT name, homepage, overview FROM companies WHERE name LIKE '%$searchTerm%' OR category LIKE '%$searchTerm%'");

  	if ($searchResults== NULL){
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