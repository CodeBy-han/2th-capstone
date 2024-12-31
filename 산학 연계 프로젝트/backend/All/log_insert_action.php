<?php
    // 필요한 파일을 포함 (DB 연결 등을 위한)
    include "../inc.php";

    // JSON 데이터를 받아 처리
    $data = json_decode(file_get_contents("php://input"), true);

    // 전달된 데이터가 유효한지 확인
    $user_idx = isset($data['user_idx']) ? $data['user_idx'] : null;
    $log_content = isset($data['log_content']) ? $data['log_content'] : null;

    // 데이터가 없을 경우 에러 처리
    if ($user_idx === null || $log_content === null) {
        echo "Invalid input";
        exit;
    }

    $user_pk = assoc("SELECT * FROM user WHERE user_login_id = '".$user_idx."';")['user_idx'];


    $insert_stmt = $conn->prepare("INSERT INTO logmessage VALUES (null, ?, ?, NOW());");
    $insert_stmt->bind_param("is", $user_pk, $log_content);
    $result = $insert_stmt->execute();
    $insert_stmt->close();
    if ($result) {
        echo "success";
    } else {
        echo "fail";
    }
?>
