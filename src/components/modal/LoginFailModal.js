import * as S from "../../style/GlobalStyle.style";
import Logo from "../../assets/img/logo.png";

const LoginFailModal = ({ onClose }, props) => {
  return (
    <S.ModalBg>
      <S.ModalContent>
        <img src={Logo} className="modal-logo" alt="" />
        <span>로그인 실패</span>
        <div className="subtext">{props.errorMessage}</div>
        <div className="modal-bottom">
          <div className="full" onClick={onClose}>
            닫기
          </div>
        </div>
      </S.ModalContent>
    </S.ModalBg>
  );
};

export default LoginFailModal;
