<?php
	
	//starting a new session when using a session variable
	session_start();

	include('connection.php');

	//script will fire if user is signing up
	if ($_POST['submit']=="Sign Up"){

		if(!$_POST['email']) $error.="<br>Please enter your email";
			else if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) $error.="<br>Please enter a valid email address";

		if (!$_POST['password']) $error.="<br>Please enter your password";
			else {

				//check to see if the password is less then 8 characters
				if (strlen($_POST['password'])<8) $error.="<br>Please enter a password with at least 8 characters";
				//check to see if there is no capital letter in password
				if (!preg_match('`[A-Z]`', $_POST['password'])) $error.="<br>Please include at least one capital letter in your password";

			}

		if ($error) echo "There were error(s) in your signup details:". $error;
		else{
			//sql statement for selecting existing users in the user table
			$query = "SELECT * FROM `users` WHERE email='".mysqli_real_escape_string($link, $_POST['email'])."'";

			$results = mysqli_query($link, $query);

			$results = mysqli_num_rows($results);

			//if the sql statement returns a value then a message will display stating user already exists
			if ($results) echo "That email address is already registered. Do you want to log in?";
				else{
					//if the user does not exist then this sql statement will insert new user in the users table
					$query="INSERT INTO `users` (`email`, `password`) VALUES('".mysqli_real_escape_string($link, $_POST['email'])."', '".md5(md5($_POST['email']).$_POST['password']) . "')";

				//mysqli_query executes the sql statment upon success 
				mysqli_query($link, $query);

				echo "You've been Signed Up!";

				$_SEESION['id']=mysqli_insert_id($link);

				// redirect to logged in page
			}
		}
	}

	//script will fire if user is logging in
	if ( $_POST['submit']=='Log In'){
		$query = "SELECT * FROM `users` WHERE email='".mysqli_real_escape_string($link, $_POST['loginemail']). "' AND password='".md5(md5($_POST['loginemail']).$_POST['loginpassword'])."'LIMIT 1";
			
			$results = mysqli_query($link, $query);
			$row = mysqli_fetch_array($results);

			if($row){
				$_SESSION['id']=$row['id'];
			}
			else{
				echo "We could not find a user with that email and password. Please try again.";
			}

	}


?>
