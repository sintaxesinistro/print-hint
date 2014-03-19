<?php

  include_once('/3D/cloud/models/main/index.php');

  //$resp = search('TV');
  //print_r($resp);
  
  function search($term){


  	$searchResults = dbMassData("SELECT name, homepage, overview FROM companies WHERE name = '$searchTerm' || category = '$searchTerm'");

    //$results = dbMassData("SELECT * FROM products WHERE name= '$term'")
    //return $results;
  }