<?php
	// 引入connect.php
	include 'connect.php';

	$username = isset($_POST['username']) ? $_POST['username'] : null; 
	$password = isset($_POST['password']) ? $_POST['password'] : null; 


	// 查找数据库中是否存在同名用户
	$sql = "insert into user(username,password) values('$username','$password')";

	// 执行sql语句
	$result = $conn->query($sql);

    
	if($result){
		echo "success";
	}else{
		echo "fail";
	}
?>