<?php

if(isset($_POST['submit'])) {

	$name = $_POST['name-and-nickname'];
	$mailFrom = $_POST['email'];
	$subject = $_POST['subject'];
	$number = $_POST['broj'];
	$message = $_POST['poruka'];

	$mailTo = "vadaskisajt@yahoo.com";
	$headers = "From: ".$mailFrom;
	$txt = "You have recived an e-mail from".$name.".\n\n".$message;

	mail($mailTo, $subject, $txt, $headers);
	header("Location: index.php?mailsend");

}

?>