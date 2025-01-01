import styled from "styled-components";

export const Mypage = styled.div`
  min-height: calc(100vh - 198px);
  padding-top: 80px;

  padding-bottom: 108px;
`;
export const MypageArea = styled.div`
  margin-top: 24px;
  width: calc(100% - 32px);
  padding: 16px;
  border-radius: 10px;
  background-color: var(--white);
  margin-bottom: 12px;

  .mypage-title {
    font-size: 16px;
    font-weight: bold;
    color: var(--blue);
    margin-bottom: 12px;
  }

  .profile-line {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    margin-bottom: 6px;
  }

  .profile-line-label {
    color: var(--strong-gray);
  }
  .profile-line-value {
    color: var(--black);
    font-weight: bold;
  }
`;
