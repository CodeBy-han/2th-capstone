import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import * as S from "../style/Pass/Pass.style.js";
const GoButton = (props) => {
  function formatDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = daysOfWeek[date.getDay()];
    return `${year}-${month}-${day}(${dayOfWeek})`;
  }

  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    setCurrentDate(formatDate()); // 오늘 날짜 설정
  }, []);

  return (
    <S.PassButton>
      <div className="pass-button-top">
        <div className="pass-button-top-left">{props.name}</div>
        <div className="pass-button-top-right">{currentDate}</div>
      </div>
      <Link to={props.link} className="pass-button-Link">
        <div>신청하기</div>
      </Link>
    </S.PassButton>
  );
};

export default GoButton;
