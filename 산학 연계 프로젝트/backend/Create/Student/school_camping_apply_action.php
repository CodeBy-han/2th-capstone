<?php
// 필요한 파일을 포함 (DB 연결 등을 위한)
include "../inc.php";

// CORS headers
header("Access-Control-Allow-Origin: http://localhost:3002"); // Adjust the origin to match your frontend
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// JSON 데이터를 받아 처리
$data = json_decode(file_get_contents("php://input"), true);

// 전달된 데이터가 유효한지 확인
$student_id = isset($data['student_id']) ? $data['student_id'] : null;
$camping_date = isset($data['camping_date']) ? $data['camping_date'] : null;
$camping_reason = isset($data['camping_reason']) ? $data['camping_reason'] : null;

// 데이터가 없을 경우 에러 처리
if ($student_id === null || $camping_date === null || $camping_reason === null) {
    echo "Invalid input";
    exit;
}

// 학생 ID를 기반으로 학생 정보를 조회
$student_pk = assoc("SELECT * FROM students WHERE student_id = '" . $student_id . "';")['student_idx'];

if (!$student_pk) {
    echo "Invalid student ID";
    exit;
}

// 캠핑 신청 데이터를 삽입
$insert_stmt = $conn->prepare("INSERT INTO camping_applications VALUES (null, ?, ?, ?, NOW());");
$insert_stmt->bind_param("iss", $student_pk, $camping_date, $camping_reason);
$result = $insert_stmt->execute();
$insert_stmt->close();

if ($result) {
    echo "success";
} else {
    echo "fail";
}
?>
