import styled from "styled-components";

export const Lab = styled.div`
  padding-top: 80px;

  padding-bottom: 72px;
  .wrap {
    height: calc(100vh - 168px);
    overflow-y: scroll;
  }
`;

export const LabArea = styled.div`
  margin-top: 24px;

  .MeisterHistory {
    background-color: var(--white);
    border-radius: 10px;
    margin-top: 0px;
    margin-bottom: 60px;
  }
  .state-list-area {
    background-color: var(--white);
    border-radius: 10px;
  }
`;
export const ButtonList = styled.div`
  width: 100%;
  gap: 12px;
  display: flex;
  margin-top: 12px;
  flex-wrap: wrap;
`;

export const LabState = styled.div`
  width: calc(100% - 24px);
  padding: 12px;
  border-radius: 10px;
  background-color: var(--white);

  .lab-state-top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .lab-state-top-left {
      display: flex;
      align-items: center;
      gap: 8px;
      path {
        fill: var(--blue);
      }
      font-size: 16px;
      font-weight: bold;
      color: var(--blue);
    }

    .lab-state-top-right {
      display: flex;
      align-items: center;
      svg {
        width: 14px;
        height: 20px;
      }
    }
  }

  .lab-state-bottom {
    text-align: left;
    font-size: 12px;
    margin-top: 32px;
    color: var(--text-gray);
  }

  .lab-state-list {
    margin-top: 24px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }
`;

export const LabItem = styled.div`
  width: calc(50% - 30px);
  height: 48px;
  padding: 12px;
  background-color: var(--form);
  border-radius: 10px;
  position: relative;
  .lab-left {
    position: absolute;
    top: 12px;
    left: 12px;
    font-size: 14px;
    font-weight: bold;
    color: var(--black);
  }

  .lab-right {
    position: absolute;
    bottom: 12px;
    right: 12px;
    color: ${(props) => props.color};
    font-size: 14px;
    font-weight: bold;
  }

  &.사용중 .lab-left {
    color: var(--text-gray);
  }
`;
