<?php
	
	$to = "wylie@dukeofcheese.com";
	$subject = "Duke of Cheese Info Email";
	$txt = $_POST['name'] . " wrote:" . "\n" . $_POST['note'];
	$headers = "From: " . $_POST['email'];
	
	mail($to,$subject,$txt,$headers);
	
?>