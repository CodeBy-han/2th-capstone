<?php
include "../inc.php";

// CORS headers
header("Access-Control-Allow-Origin: http://localhost:3002"); // Adjust the origin to match your frontend
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight request (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0); // Stop further execution for preflight
}

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if login form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve input values
    $login_id = isset($_POST['login_id']) ? $_POST['login_id'] : '';
    $login_pw = isset($_POST['login_pw']) ? $_POST['login_pw'] : '';

    // Simple input validation
    if (empty($login_id) || empty($login_pw)) {
        echo "아이디 또는 비밀번호를 입력하세요.";
    } else {
        // Prepare SQL statement to avoid SQL injection
        $stmt = $conn->prepare("SELECT * FROM user WHERE user_login_id = ?");
        $stmt->bind_param("s", $login_id);
        $stmt->execute();
        $result = $stmt->get_result();

        // Check if user exists
        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();
            $hashed_pw = hash("sha256", $login_pw); // Hash the provided password


            // Verify the password (assuming the password is hashed in the database)
            if ($user['user_login_pw'] == $hashed_pw) {
                // Store user session data

                // Output success message (React will check for this)
                echo "dashboard";
                echo "<br />";
                echo $user['user_depth'];
                exit();
            } else {
                echo "잘못된 비밀번호입니다.";
            }
        } else {
            echo "존재하지 않는 사용자입니다.";
        }
    }
}

// Close the connection
$conn->close();
?>
