<?php
/* Здесь проверяется существование переменных */
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['email'])) {$mail = $_POST['mail'];}
if (isset($_POST['phone'])) {$product = $_POST['product'];}
 

$myaddres  = "vladislav.jorin@gmail.com"; // кому отправляем
$mes = "Тема: Заказ обратного звонка!\nТелефон: $phone\nИмя: $name\nEmail: $mail\nПродукт: $product" ;
 

$sub='Заказ'; 
$email='Заказ обратного звонка'; 
$send = mail ($myaddres,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");
 
ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>