<?php

  include_once('/home/content/80/11356380/html/3d/cloud/models/main/index.php');

  //$resp = search('TV');
  //print_r($resp);
  
  function searchDirect($searchTerm){


  	$searchResults = dbMassData("SELECT * FROM directory WHERE name LIKE '%$searchTerm%' OR type LIKE '%$searchTerm%'");

    //$results = dbMassData("SELECT * FROM products WHERE name= '$term'")
    return $searchResults;
  }
?>