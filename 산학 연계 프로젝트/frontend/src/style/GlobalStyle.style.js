import styled from "styled-components";

export const GlobalStyle = styled.div`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }

  * {
    font-family: "Pretendard-Regular";
  }

  width: 100vw;
  margin: 0px auto;

  min-height: 100vh;
  padding: 0px;
  font-family: "Pretendard-Regular";

  /*color*/
  --black: #000;
  --white: #fff;
  --strong-gray: #878789;
  --gray: #e6e5ea;
  --text-gray: #878787;
  --red: #ff2b57;
  --orange: #ff4900;
  --blue: #027bff;
  --green: #00c6bd;
  --skyblue: #79e0ff;
  --click: rgba(255, 255, 255, 0.4);
  --form: #f7f7f7;
  --yellow: #f39b4a;

  .wrap {
    width: 100%;
    position: relative;
    overflow-x: hidden;
  }

  .inner {
    width: calc(100% - 40px);
    padding-left: 20px;
    padding-right: 20px;
    margin: auto;
    position: relative;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  .hidden {
    width: 0px !important;
    height: 0px !important;
    display: none !important;
    overflow: hidden !important;
    opacity: 0 !important;
    position: absolute !important;
    border: none !important;
    outline: none !important;
  }

  body::-webkit-scrollbar {
    display: none;
  }
`;

export const ContentArea = styled.div`
  height: 100vh;
`;

export const Header = styled.div`
  width: 100vw;
  height: 80px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  max-width: 640px;
  margin: 0px auto;
  z-index: 9999;
  border-bottom: 1px solid #f1f1f1;
  background-color: var(--white);
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  .inner {
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: space-between;
  }
  .header_right {
    display: flex;
    align-items: center;
    height: 60px;
    gap: 16px;
  }
  .header_right img {
    width: 28px;
    height: 28px;
    cursor: pointer;
  }
  .header_left {
    display: flex;
    align-items: center;
    gap: 16px;
    .header_left_back {
      width: 18px;
      height: 18px;
    }
    img {
      width: 18px;
      height: 18px;
    }
  }
  .header_left_title {
    font-size: 20px;
    font-weight: bold;
  }

  .header-sidebar-bg {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }
`;

export const NavBar = styled.div`
  width: 100vw;
  height: 72px;
  max-width: 640px;
  margin: 0px auto;

  background-color: var(--white);
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0px;
  box-sizing: border-box;
  border-top: 1px solid #ccc;

  & > .wrap {
    display: flex;
    height: 72px;
    align-items: center;
    justify-content: space-between;
  }
  & .navbar-item {
    width: 20%;
    cursor: pointer;
    text-align: center;
    img {
      width: 28px;
      height: 28px;
      object-fit: contain;
    }
    &.active img {
      filter: brightness(0);
    }
  }
  & .navbar-item-text {
    font-size: 12px;
    color: var(--strong-gray);
    margin-top: 4px;
  }
`;

export default GlobalStyle;

export const ButtonList = styled.div`
  width: 100%;
  gap: 12px;
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
`;

export const pageTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
`;

export const PassForm = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  background-color: var(--white);
  border-radius: 10px;
  margin-top: 24px;

  .form-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .form-top-left {
    font-weight: bold;
    color: var(--blue);
  }
  .form-top-right {
    font-size: 12px;
    color: var(--text-gray);
  }

  .form-input-box {
    margin-bottom: 16px;
  }

  .form-input-label {
    font-size: 12px;
    color: var(--text-gray);
    margin-bottom: 8px;
  }
  .form-input-file {
    color: var(--text-gray);
  }
  .form-input {
    display: block;
    width: calc(100% - 32px);
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    align-items: center;

    border: none;
    outline: none;
    border-radius: 10px;
    background-color: var(--form);
    height: 42px;
    font-size: 12px;
  }

  .file-list {
    margin-top: 12px;
  }
  .file-info {
    width: calc(100% - 24px);
    margin-bottom: 4px;
    border-radius: 10px;
    font-size: 12px;
    display: flex;
    align-items: center;
    padding: 6px 12px;
    justify-content: space-between;
    background-color: var(--form);
    span {
      color: var(--blue);
    }
    button {
      padding: 4px 8px;
      border: 1px solid var(--red);
      color: var(--white);
      background-color: var(--red);
      font-size: 10px;
      border-radius: 4px;
      outline: none;
    }
  }

  .form-select {
    display: block;
    width: calc(100%);
    padding-left: 16px;
    padding-right: 16px;
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: var(--form);
    height: 42px;
    font-size: 12px;
  }

  .form-textarea {
    display: block;
    width: calc(100% - 32px);
    padding: 16px;
    height: 15vh;
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: var(--form);
    resize: none;
    font-size: 12px;
  }

  .form-input-box-flex {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .form-input-box-flex-left {
    display: flex;
    width: calc(50% - 6px);
    align-items: center;
    gap: 8px;
  }
  .form-input-box-flex-right {
    width: calc(50% - 6px);
  }

  .form-button {
    margin-top: 60px;
    background-color: var(--blue);
    color: var(--white);
    font-size: 14px;
    height: 45px;
    display: flex;
    width: 100%;
    border: none;
    outline: none;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
`;

export const ModalBg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderSidebarBg = styled.div`
  @keyframes modal_open {
    from {
      height: 0vh;
    }
    to {
      height: 100vh;
    }
  }
  width: 100%;
  position: fixed;
  animation: modal_open 0.5s ease-in-out forwards;
  top: 0;
  left: 0;
  z-index: 9999;
  backdrop-filter: blur(2px);
  display: flex;
  align-items: start;
  justify-content: right;
`;

export const ModalContent = styled.div`
  width: calc(90% - 32px);
  padding: 16px;
  height: 200px;
  border-radius: 10px;
  position: relative;
  background-color: var(--white);
  span {
    display: block;
    text-align: center;
    font-size: 18px;
    margin-top: 24px;
  }
  .modal-logo {
    width: 80px;
    height: 80px;
    display: block;
    margin: auto;
  }

  .modal-bottom {
    position: absolute;
    width: 100%;
    bottom: 0px;
    height: 60px;
    display: flex;
    border-top: 1px solid var(--gray);
    left: 0px;
    align-items: center;
    justify-content: space-between;
    & > .full {
      width: 100%;
      border: none !important;
      color: var(--blue) !important;
    }
    & > div {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;

      justify-content: center;
      &:first-child {
        border-right: 1px solid var(--gray);
        color: var(--red);
        font-weight: bold;
      }
    }
  }
`;

export const HeaderSidebar = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  position: relative;
  .header-sidebar-inner {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 32px);
    height: 90vh;
    max-height: calc(100vh - 112px);
    overflow: scroll;
    padding: 16px;
    background-color: var(--white);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    & > .sidebar-menu-categoriArea:first-child {
      margin-top: 0px;
    }

    & > .sidebar-menu-categoriArea {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 12px;
      gap: 12px;
      padding: 8px 0px 12px 0px;
      border-bottom: 1px solid #f1f1f1;
    }

    .sidebar-menu-title {
      font-size: 18px;
      font-weight: bold;
      width: 100%;
      margin-bottom: 12px;
    }
  }

  .top-line-right {
    display: flex;
    align-items: center;
    height: 80px;
    gap: 16px;
  }
  .top-line-right img {
    width: 28px;
    height: 28px;
    cursor: pointer;
    filter: brightness(0) invert();
  }
`;

export const List = styled.div`
  margin-top: 12px;
`;

export const HeaderSidebarMenuButton = styled.div`
  .sidebar-menu-button {
    width: calc((100vw - 80px) / 5);
    height: calc((100vw - 80px) / 5);
    background-color: #f1f1f1;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .sidebar-menu-button-inner {
    }
    svg {
      width: 32px;
      height: 32px;
    }
  }

  .sidebar-menu-button-text {
    font-size: 12px;
    width: 100%;
    text-align: center;
    margin-top: 8px;
    color: var(--text-gray);
  }
`;
