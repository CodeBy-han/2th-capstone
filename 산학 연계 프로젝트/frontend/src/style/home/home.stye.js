import styled from "styled-components";

export const Home = styled.div`
  min-height: calc(100vh - 162px);
  padding-top: 80px;
  padding-bottom: 72px;

  .benner {
    margin-top: 24px;

    width: 100%;
  }
`;

export const NotFound = styled.div`
  height: calc(100vh - 132px);
  padding-top: 60px;
  padding-bottom: 72px;
  .not-found {
    height: calc(100vh - 132px);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
  }
`;

export const ContentArea = styled.div``;

export const ButtonList = styled.div`
  width: 100%;
  gap: 12px;
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
`;
