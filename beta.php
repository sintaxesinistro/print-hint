<?php

	include_once('settings.php');
	include_once('dbLib.php');

	extract($_REQUEST);
	dbQuery("INSERT INTO User (email) VALUES ('$email')");
	echo('added '. $email);

	echo('<h1>You have been added to our system!</h1><br>
		<h2>Continue to <a href="http://printhint.com/home.html">PrintHint.com</a>');

?>