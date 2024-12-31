import * as S from "../../style/GlobalStyle.style";
import Logo from "../../assets/img/logo.png";
import addLog from "../../action/AddLog.js";

const LogoutModal = ({ onClose }) => {
  return (
    <S.ModalBg>
      <S.ModalContent>
        <img src={Logo} className="modal-logo" alt="" />
        <span>로그아웃 하시겠습니까?</span>
        <div className="modal-bottom">
          <div
            onClick={() => {
              addLog(
                "User " +
                  localStorage.getItem("myuseridx") +
                  " 님이 로그아웃 했습니다."
              );

              localStorage.clear();
              window.location.href = "/Login";
            }}
          >
            로그아웃
          </div>
          <div onClick={onClose}>취소</div>
        </div>
      </S.ModalContent>
    </S.ModalBg>
  );
};

export default LogoutModal;
