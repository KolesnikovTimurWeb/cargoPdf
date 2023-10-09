<?php
$name = $_POST['name'];
$email = $_POST['name'];
$phone = $_POST['name'];
$delivery = $_POST['name'];
$coment = $_POST['name'];

$to = "kolesnikovkoc@gmail.com";
$date = date("d.m.Y");
$time = date("h:i");
$from = $email;
$subject = "Заявка c сайта";


$msg = "
    Ник: $name /n
    Привилегия: $name /n
    Оплата: $name";

 if(mail($to, $subject, $msg, "From: $from ")) {
		header('location: index.html');
	} 
	

?>