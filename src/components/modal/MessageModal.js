import React from "react";
import * as S from "../../style/GlobalStyle.style";
import Logo from "../../assets/img/logo.png";

const MessageModal = ({ onClose, props }) => {
  return (
    <S.ModalBg>
      <S.ModalContent>
        <img src={Logo} className="modal-logo" alt="Logo" />
        <span>{props.title}</span>

        <div className="modal-bottom">
          <div
            className="full"
            onClick={() => {
              window.location.href = props.link;
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

export default MessageModal;
