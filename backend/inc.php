<?php 
    //기본설정
    date_default_timezone_set('Asia/Seoul');
    header('Content-Type: text/html; charset=utf-8');
    header("Access-Control-Allow-Origin: http://localhost:3002");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    //세션 설정
    session_start();
    $jb_login;
    if(isset($_SESSION['user_idx'])){
        $jb_login = true;
    }else{
        $jb_login = false;
    }

    error_reporting(E_ALL);
    ini_set('display_errors', '1');


    // 데이터베이스 연결 설정
    $conn = mysqli_connect("localhost", "root", "Fjqm1425*", "edutech") or die ("database connect error");
    



    
    // 자주쓰는 함수 모음

    //mysql 쿼리 실행
    function mq($query){
        global $conn;
        $res = mysqli_query($conn, $query);
        return $res;
    }

    //mysql에 결제 정보 등록 리디
    function newOrder($orderNo) {
        global $conn;
        $pending = "pending";
        $stmt = $conn -> prepare("INSERT INTO cost_check VALUES (null, ?, ?)");
        $stmt -> bind_param("ss", $orderNo, $pending);
        $stmt -> execute();
        $stmt -> close();
    }
    
    //mysql에 결제 정보 업데이트 리디
    function successOrder($orderNo) {
        global $conn;
        $completed = "completed";
        $stmt = $conn -> prepare("UPDATE cost_check SET cc_state = ? WHERE cc_id = ?");
        $stmt -> bind_param("ss", $completed, $orderNo);
        $stmt -> execute();
        $stmt -> close();
    }

    //mysql에 결제 정보 가져오기
    function getOrderState($orderNo) {
        global $conn;
        $res = mysqli_query($conn, 'SELECT * FROM cost_check WHERE cc_id = "' . $orderNo. '"');
        $arr = mysqli_fetch_array($res);
        return $arr['cc_state'];
    }

    // mysql 쿼리 한줄로 반환
    function assoc($query){
        global $conn;
        $res = mysqli_query($conn, $query);
        $row = mysqli_fetch_assoc($res);
        return $row;
    }

    function go($link){
        echo "<script>
            location.href = '".$link."'
        </script>";
    }

    function alert($message){
        echo "<script>
            alert('".$message."')
        </script>";
    }

    function console($console){
        echo "<script>
            console.log('".$console."')
        </script>";
    }


?>