const addLog = (message) => {
  fetch("http://localhost/edutech-server/backend/All/log_insert_action.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_idx: localStorage.getItem("myuseridx"), // loginId 변수가 잘 정의되어 있는지 확인
      log_content: message,
    }),
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error("Error:", error));
};

export default addLog;
