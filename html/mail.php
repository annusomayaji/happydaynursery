<!doctype html>
<html>
<head>
<link href="../styles.css" rel="stylesheet" />

</head>
<body>
<?php

if ($_SERVER["REQUEST_METHOD"]=="POST"){
	
	$name=trim($_POST["name"]);
	$email=trim($_POST["email"]);
	$message=trim($_POST["message"]);

	
if(empty($name) OR empty($message) OR !filter_var($email,FILTER_VALIDATE_EMAIL,FILTER_FLAG_PATH_REQUIRED)){ //check for empty fields and invalid email format
	http_response_code(400);  //if TRUE set bad request response code
	echo "There was a problem.<a href='http://localhost/Happy Day Nursery Project/html/index.html'>Try again</a>"; 
	//echo "There is some problem with your submission! Please try again";
	exit;
}

$recipient = "annusomayaji@gmail.com";// recipient's email address. Can be changed to desired recipient

$subject = "Message from $name";
$email_headers = "From: $name <$email>";

$content= "Message:\n$message\n";

if(mail($recipient, $subject, $content, $email_headers)){
	
http_response_code(200); // if TRUE set response code OKAY
echo "<h2 style='color:red'>Your message has been sent! Thank you for contacting.</h2>"; //display  success message
echo "<a href='http://localhost/Happy Day Nursery Project/html/index.html'>Home</a>"; //redirect to the home page
}
else{
	http_response_code(500);//error code
    echo "Oops! Something went wrong and we couldn't send your message.";
}
}
else {
        
        http_response_code(403);// if POST request not valid
        echo "There was a problem.<a href='http://localhost/Happy Day Nursery Project/html/contact.html'>Try again</a>"; 
	
		
    }


?>