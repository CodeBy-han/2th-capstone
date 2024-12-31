<?php
include "../../../inc.php";

// CORS 설정
header("Access-Control-Allow-Origin: http://localhost:3002");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8"); // JSON 응답 설정

// JSON 데이터를 받아 처리
$data = json_decode(file_get_contents("php://input"), true);

// 입력값 확인
$user_idx = isset($data['user_idx']) ? $data['user_idx'] : null;

if ($user_idx === null) {
    echo json_encode(["status" => "error", "message" => "Invalid user index"]);
    exit;  // 유효하지 않은 요청 처리 중지
}

// SQL Injection 방지 (Prepared Statements)
$stmt = $conn->prepare("SELECT * FROM user WHERE user_login_id = ? AND user_depth = 2");
$stmt->bind_param("s", $user_idx);
$stmt->execute();
$user_pk = $stmt->get_result()->fetch_assoc();

if (!$user_pk) {
    echo json_encode(["status" => "error", "message" => "User not found"]);
    exit;
}

// 결과를 배열로 저장
$result[] = [
    'user_idx' => $user_pk['user_idx'],
    'user_login_id' => $user_pk['user_login_id'],
    'user_name' => $user_pk['user_name'],
];

// JSON으로 출력
echo json_encode($result);

?>
