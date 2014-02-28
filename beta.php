<?php

	include_once('setting.php');
	include_once('dblip.php');

	extract($_REQUEST);
	dbquery("INSERT INTO Users (email) VALUES '$	email'");

	echo('added');

?>