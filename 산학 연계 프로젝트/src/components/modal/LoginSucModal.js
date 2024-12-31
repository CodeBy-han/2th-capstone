import React from "react";
import * as S from "../../style/GlobalStyle.style";
import Logo from "../../assets/img/logo.png";

const LoginSucModal = ({ onClose }) => {
  return (
    <S.ModalBg>
      <S.ModalContent>
        <img src={Logo} className="modal-logo" alt="Logo" />
        <span>로그인 성공</span>

        <div className="modal-bottom">
          <div
            className="full"
            onClick={() => {
              if (localStorage.getItem("myuserdepth") === "1") {
                window.location.href = "/";
              } else if (localStorage.getItem("myuserdepth") === "2") {
                window.location.href = "/TeacherMain";
              } else if (localStorage.getItem("myuserdepth") === "3") {
                window.location.href = "/ParentsMain";
              } else if (localStorage.getItem("myuserdepth") === "0") {
                window.location.href = "/AdminMain";
              }
              if (onClose) onClose(); // Close the modal if onClose is provided
            }}
          >
            확인
          </div>
        </div>
      </S.ModalContent>
    </S.ModalBg>
  );
};

export default LoginSucModal;
