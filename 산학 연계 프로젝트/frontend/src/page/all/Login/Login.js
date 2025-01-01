import React, { useState } from "react";
import * as S from "../../../style/Login/Login.style.js";
import Logo from "../../../assets/img/logo.png";
import LoginSuc from "../../../components/modal/LoginSucModal.js";
import LoginFail from "../../../components/modal/LoginFailModal.js";
import addLog from "../../../action/AddLog.js";
const Login = () => {
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showLoginModal, setShowLoginModal] = useState({
    success: false,
    fail: false,
  });
  let userdepth = "";
  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("login_id", loginId);
    formData.append("login_pw", loginPw);

    try {
      const response = await fetch(
        "http://localhost/edutech-server/backend/All/login_action.php",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );
      console.log("button click");

      const result = await response.text();

      if (response.ok && result.includes("dashboard")) {
        let parts = result.split("<br />"); // <br />을 기준으로 문자열을 나눕니다.
        userdepth = parts[1];
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("myuseridx", loginId);
        localStorage.setItem("myuserdepth", userdepth);
        setShowLoginModal({ success: true, fail: false });
        addLog("전체: User " + loginId + " 님이 로그인 시도 - 성공");
      } else {
        handleLoginError(result || "로그인에 실패했습니다. 다시 시도해주세요.");
        addLog("전체: User " + loginId + " 님이 로그인 시도 - 실패");
      }
    } catch (error) {
      handleLoginError("서버에 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const handleLoginError = (message) => {
    setErrorMessage(message);
    setShowLoginModal({ success: false, fail: true });
  };

  const closeModal = () => {
    setShowLoginModal({ success: false, fail: false });
    if (showLoginModal.success) {
    }
  };

  return (
    <S.LoginArea>
      <div className="logo-area">
        <img src={Logo} alt="Logo" />
      </div>
      <form id="login_form" autoComplete="off" onSubmit={handleLogin}>
        <input
          type="text"
          className="login-form-input"
          placeholder="로그인 아이디를 입력하세요"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <input
          type="password"
          className="login-form-input"
          placeholder="비밀번호를 입력하세요"
          value={loginPw}
          onChange={(e) => setLoginPw(e.target.value)}
        />
        <button type="submit" className="login-form-button">
          로그인
        </button>
      </form>

      {showLoginModal.success && (
        <LoginSuc onClose={closeModal} userid={loginId} />
      )}
      {showLoginModal.fail && (
        <LoginFail errorMessage={errorMessage} onClose={closeModal} />
      )}
    </S.LoginArea>
  );
};

export default Login;
