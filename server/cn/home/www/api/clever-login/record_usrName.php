<?php
include '../../functions.php';

header('Access-Control-Allow-Origin:*');

$tel=$_REQUEST['tel'];
$name=$_REQUEST['name'];

$conn=db__connect();

db__pushData($conn,"user",array("name"=>$name),array("tel"=>$tel));

echo json_encode(array("code"=>0));

die();