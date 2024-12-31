import styled from "styled-components";

export const LoginArea = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: #00aa87;
  z-index: 9999;

  .logo-area {
    width: 240px;
    height: 240px;
    border-radius: 300px;
    display: flex;
    margin: auto;
    margin-top: 10vh;
    align-items: center;
    justify-content: center;
    background-color: var(--white);
    img {
      width: 200px;
      height: 200px;
    }

    @media (min-width: 1200px) {
      width: 200px;
      height: 200px;

      img {
        width: 180px;
        height: 180px;
      }
    }
  }

  form {
    width: 90%;
    padding: 5vw;
    position: absolute;
    bottom: 0;
    min-height: 190px;
    height: 20vh;
    padding-top: 5vh;
    background-color: var(--white);
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;

    @media (min-width: 1200px) {
      bottom: auto;
      top: 50%;
      left: 50%;
      width: 540px;
      transform: translate(-50%, -50%);
      border-radius: 20px;
      min-height: auto;
      height: auto;
      padding: 3vh;
    }
  }

  .login-form-input {
    background-color: var(--form);
    width: calc(100% - 32px);
    padding: 16px;
    border-radius: 10px;
    border: none;
    outline: none;
    color: var(--black);
    margin-bottom: 12px;
  }

  .login-form-button {
    width: 100%;
    height: 55px;
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: #00aa87;
    color: var(--white);
    font-size: 18px;
    font-weight: bold;
  }
`;
