import React, { useEffect, useState } from "react";
import * as S from "../../style/Pass/Pass.style.js";
import { ReactComponent as Icon } from "../../assets/icon/Pass/Pass.svg";

const PassCardWait = (props) => {
  const data = props.array || {}; // data가 비동기적으로 제공될 경우에 대비

  const [userData, setUserData] = useState(null); // 사용자 데이터 상태
  const [errorMessage, setErrorMessage] = useState(null); // 에러 메시지 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [status, setStatus] = useState({
    itemState: "",
    statusText: "",
    color: "",
  });

  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost/edutech-server/backend/Read/Student/UserMyDataJson.php?login_id=${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const result = await response.json();
      if (result.status === "success") {
        setUserData(result.data); // 사용자 데이터를 상태로 설정
      } else {
        setErrorMessage(result.message || "Error fetching user data");
      }
    } catch (error) {
      setErrorMessage("Fetch Error: Unable to retrieve data");
    } finally {
      setLoading(false); // 로딩 완료
    }
  };

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

  // 페이지가 로드될 때 사용자 데이터를 가져옴
  useEffect(() => {
    const userId = localStorage.getItem("myuseridx"); // 실제 유저 ID에 맞게 변경
    if (userId) {
      fetchUserData(userId);
    } else {
      setErrorMessage("User ID not found");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    stateCheck(data);
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <S.PassCard className={status.itemState}>
      <div className="pass-button-top">
        <div className="pass-button-top-left">My 외출증</div>
        <div className="pass-button-top-right">{data.date}</div>
      </div>
      <div className="pass-button-bottom-area">
        <div className="pass-button-bottom-area-left">
          <div className="pass-area-textline">
            <div className="pass-area-label">외출자</div>
            <div className="pass-area-value">
              {userData?.user_name || "N/A"}
            </div>
          </div>
          <div className="pass-area-textline">
            <div className="pass-area-label">동행자</div>
            <div className="pass-area-value">{data.withgo || "N/A"}</div>
          </div>
          <div className="pass-area-textline">
            <div className="pass-area-label">외출시간</div>
            <div className="pass-area-value">
              {data.start_time} ~ {data.end_time}
            </div>
          </div>
          <div className="pass-area-textline">
            <div className="pass-area-label">외출예정장소</div>
            <div className="pass-area-value">{data.location || "N/A"}</div>
          </div>

          <div className="pass-area-textarea">
            <div className="pass-area-label">외출사유</div>
            <div className="pass-area-value">{data.content || "N/A"}</div>
          </div>
        </div>
        <div className="pass-button-bottom-area-right">
          <Icon />
          <div className="pass-state-text" style={{ color: status.color }}>
            {status.statusText}
          </div>
        </div>
      </div>

      <div className="pass-state">
        <div className="pass-area-textline">
          <div className="pass-area-label">담당교사</div>
          <div className="pass-area-value">
            {data.t_ok === 1 ? "승인됨" : "대기중"}
          </div>
        </div>
        <div className="pass-area-textline">
          <div className="pass-area-label">학부모</div>
          <div className="pass-area-value">
            {data.p_ok === 1 ? "승인됨" : "대기중"}
          </div>
        </div>
      </div>
    </S.PassCard>
  );
};

export default PassCardWait;
