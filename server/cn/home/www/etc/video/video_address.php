<?php
include '../../functions.php';

header('Access-Control-Allow-Origin:*');

$id=$_REQUEST['id'];
$fp=$_REQUEST['fp'];


if(isset($_SESSION['s_fp'])) 
{
	if($_SESSION['s_fp']!=$fp) {header("Location: https://yimian-video.obs.myhwclouds.com/404.mp4");die();}
}


if(!isset($fp)||$fp=="") {header("Location: https://yimian-video.obs.myhwclouds.com/404.mp4");die();}


$conn=db__connect();

$usr=db__getData($conn,"fp","fp",$fp);

if($usr[0]['usr']=="")
{
	
	$res=db__getData($conn,"videolog","fp",$fp);

	$cnt=0;

	foreach($res as $each)
	{
		if($each['time']>(time()-3600*24)) $cnt++;
	}

	if($cnt>20)  
	{
		echo json_encode(array("code"=>2));
	
		die();
	}
}

$video=db__getData($conn,"video","id",$id);

header("Location: ".$video[0]['url1']);