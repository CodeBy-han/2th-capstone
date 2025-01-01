import styled from "styled-components";
export const PassButton = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  background-color: var(--white);
  margin-top: 24px;
  border-radius: 10px;
  .pass-button-top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .pass-button-top-left {
      font-size: 16px;
      font-weight: bold;
      color: var(--blue);
    }
    .pass-button-top-right {
      color: var(--text-gray);
      font-size: 12px;
    }
  }

  .pass-button-Link {
    margin-top: 36px;
    width: calc(100% - 32px);
    display: flex;
    padding: 0px 16px;
    height: 55px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    border-radius: 10px;
    background-color: var(--blue);
    color: var(--white);
  }
`;

export const PassHistory = styled.div`
  width: calc(100% - 32px);
  background-color: var(--white);
  margin-top: 12px;
  border-radius: 10px;
`;
export const PassHistoryItem = styled.div`
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid #f1f1f1;

  .pass-history-item-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .pass-history-item-top-left {
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
  }
  .pass-history-item-top-right {
    display: flex;
    align-items: center;
    font-size: 12px;
    gap: 8px;
    color: var(--text-gray);

    svg {
      width: 12px;
      height: 12px;
    }
  }

  .pass-history-item-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
  }

  .pass-history-item-bottom-left {
    font-size: 12px;
    color: var(--text-gray);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 80%;
  }
  .pass-history-item-bottom-right {
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => props.color} !important;
  }
`;

export const Line = styled.div`
  margin-top: 24px;
`;

export const PassCard = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  background-color: var(--white);
  border-radius: 10px;

  .pass-button-top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .pass-button-top-left {
      font-size: 16px;
      font-weight: bold;
      color: var(--blue);
    }
    .pass-button-top-right {
      color: var(--text-gray);
      font-size: 12px;
    }
  }

  .pass-button-bottom-area {
    width: calc(100% - 24px);
    padding: 12px;
    background-color: var(--form);
    margin-top: 16px;
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: start;
    justify-content: space-between;
    & > div:first-child {
      width: 70%;
    }
    .pass-state-text {
      font-size: 14px;
      font-weight: bold;
      color: var(--strong-gray);
      text-align: center;
      margin-top: 8px;
    }

    svg {
      display: block;
      margin: auto;
      width: 80px;
      height: 80px;
    }
  }

  &.wait svg path {
    fill: var(--strong-gray);
  }
  &.fail svg path {
    fill: var(--red);
  }
  &.sucend svg path {
    fill: var(--blue);
  }
  &.waitend svg path {
    fill: var(--strong-gray);
  }
  &.suc svg path {
    fill: var(--blue);
  }
  .pass-state {
    padding-left: 12px;
    margin-top: 12px;
    & > div {
      margin-bottom: 0px;
      .pass-area-label {
        width: 60px;
      }
    }
    & > div:first-child {
      margin-bottom: 4px;
    }
  }
  .pass-area-textline {
    display: flex;
    font-size: 12px;
    margin-bottom: 8px;
  }

  .pass-area-label {
    font-weight: bold;
    width: 80px;

    font-size: 12px;
    color: var(--strong-gray);
  }

  .pass-area-value {
    font-size: 12px;
    color: var(--black);
    font-weight: bold;
  }

  .pass-area-textarea {
    .pass-area-label {
      margin-bottom: 8px;
    }

    .pass-area-value {
      font-weight: normal;
      color: var(--black);
    }
  }
`;
