import { ReactComponent as Right } from "../assets/icon/Button/right.svg";
import * as S from "../style/Pass/Pass.style.js";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListHistory = ({ idx, index, array }) => {
  const data = array || {}; // data가 없을 경우 빈 객체로 기본값 설정

  const [status, setStatus] = useState({
    itemState: "",
    statusText: "",
    color: "",
  });

  // 데이터 상태 확인
  const stateCheck = (data) => {
    if (!data) return;

    const now = new Date();
    const endTime = new Date(`${data.date || ""} ${data.end_time || ""}`);

    if (data.t_ok === 2 || data.p_ok === 2) {
      setStatus({
        itemState: "fail",
        statusText: "반려",
        color: "var(--red)",
      });
    } else if (now > endTime) {
      if (data.t_ok === 1 && data.p_ok === 1) {
        setStatus({
          itemState: "sucend",
          statusText: "사용만료",
          color: "var(--blue)",
        });
      } else if (data.t_ok === 0 && data.p_ok === 0) {
        setStatus({
          itemState: "waitend",
          statusText: "대기만료",
          color: "var(--strong-gray)",
        });
      }
    } else {
      if (data.t_ok === 1 && data.p_ok === 1) {
        setStatus({
          itemState: "suc",
          statusText: "발급완료",
          color: "var(--blue)",
        });
      } else if (data.t_ok === 0 || data.p_ok === 0) {
        setStatus({
          itemState: "wait",
          statusText: "대기중",
          color: "var(--strong-gray)",
        });
      }
    }
  };

  useEffect(() => {
    stateCheck(data);
  }, [data]);

  return (
    <S.PassHistoryItem color={status.color}>
      <Link to={"/passinner/" + data.idx}>
        <div className="pass-history-item-top">
          <div className="pass-history-item-top-left">외출증 신청</div>
          <div className="pass-history-item-top-right">
            <div>{data.date || "날짜 없음"}</div>
            <Right />
          </div>
        </div>
        <div className="pass-history-item-bottom">
          <div className="pass-history-item-bottom-left">
            {data.content || "내용 없음"}
          </div>
          <div className="pass-history-item-bottom-right">
            {status.statusText}
          </div>
        </div>
      </Link>
    </S.PassHistoryItem>
  );
};

export default ListHistory;
