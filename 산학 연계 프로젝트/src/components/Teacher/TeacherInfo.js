import React, { useState, useEffect } from "react";

const TeacherInfor = () => {
  const [inforResult, setInforResult] = useState(""); // 외출증 상태 관리
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const [error, setError] = useState(null); // 오류 상태 관리

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch status
        const responseState = await fetch(
          "http://localhost/edutech-server/backend/Read/Teacher/All/TeacherInformation.php",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              user_idx: localStorage.getItem("myuseridx"),
            }),
          }
        );

        if (!responseState.ok) {
          throw new Error("네트워크 응답에 문제가 있습니다.");
        }
        const resultState = await responseState.json();
        console.log(resultState[0].user_name);
        setInforResult(resultState);

        localStorage.setItem("name", resultState[0].user_name);

        // Fetch history
      } catch (error) {
        console.error("Error:", error);
        setError("데이터를 불러오는 중 문제가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    console.log(error + "교사 정보 출력 API 오류 발생");
  }

  if (loading) {
    console.log("교사 정보 출력 API 로딩중");
  }
};

export default TeacherInfor;
