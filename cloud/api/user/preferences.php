<?php
	
	include_once('/home/content/80/11356380/html/3d/cloud/models/user/changePref.php');

	extract($_REQUEST);

	$userId = $_REQUEST['userId']
	$name = $_REQUEST['name']

	changePref($_REQUEST)


?>


$.ajax({
	url:'/home/content/80/11356380/html/3d/cloud/api/user/preferences.php',
	data:{userId:$('//would have to pull from session').val(), accountType:$('#accountType').val(), $('#notificationSettings').val(), emailPreferences:$('#emailPreferences').val(), following:$('#following').val(), phone:$('#phone').val(),
	complete:finish }
})