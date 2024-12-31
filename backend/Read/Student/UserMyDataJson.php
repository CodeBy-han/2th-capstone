<?php

// CORS 설정
header("Access-Control-Allow-Origin: http://localhost:3002");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// 데이터베이스 연결 설정
include "../../inc.php";

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: application/json');

    if (isset($_GET['login_id'])) {
        $login_id = trim($_GET['login_id']);

        if ($login_id) {
            $sql = "SELECT * FROM user WHERE user_login_id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("s", $login_id);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows > 0) {
                $user_data = $result->fetch_assoc();
                echo json_encode([
                    'status' => 'success',
                    'data' => $user_data
                ]);
            } else {
                echo json_encode([
                    'status' => 'error',
                    'message' => '해당 ID를 가진 사용자가 없습니다.'
                ]);
            }

            $stmt->close();
        } else {
            echo json_encode([
                'status' => 'error',
                'message' => 'login_id가 비어있습니다.'
            ]);
        }
    } else {
        echo json_encode([
            'status' => 'error',
            'message' => 'login_id가 제공되지 않았습니다.'
        ]);
    }
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'GET 요청만 허용됩니다.'
    ]);
}

$conn->close();
?>
