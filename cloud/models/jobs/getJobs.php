<?php
	include_once('/home/content/80/11356380/html/3d/cloud/models/main/index.php');

	//DEBUG
	//echo(json_encode(getJobs()));

	function getJobs(){

		$resp = dbMassData("SELECT * FROM jobs WHERE status != complete OR status != inProgress");
		return $resp;
	}
?>