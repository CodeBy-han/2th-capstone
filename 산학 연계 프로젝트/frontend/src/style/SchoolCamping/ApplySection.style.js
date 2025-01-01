import styled from "styled-components";

export const ApplySection = styled.section`
  margin: 0 auto;
  margin-top: 40px;

  .submitFalse {
    width: 100%;
    padding: 10px 20px;
    border: 0;
    border-radius: 5px;
    background: #01ad8580;
    color: white;
  }

  .submitTrue {
    width: 100%;
    padding: 10px 20px;
    border: 0;
    border-radius: 5px;
    background: #01ad85;
    color: white;
  }

  .head_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .add_user_button {
    display: flex;
    text-align: center;
    align-items: center;
    border: 0;
    font-weight: bold;
    font-size: 24px;
    padding: 10px;
    background: 0;
    width: 36px;
    height: 36px;
  }
  .user_infO {
    width: 100%;
  }
  .user {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btn {
      display: flex;
      text-align: center;
      align-items: center;
      border: 0;
      font-weight: 800;
      font-size: 16.5px;
      padding: 10px;
      background: 0;
      width: 36px;
      height: 36px;
    }
  }
`;
