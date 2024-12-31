import styled from "styled-components";

export const Class = styled.div`
  min-height: calc(100vh - 198px);

  padding-top: 80px;

  padding-bottom: 108px;
  .historyArea {
    border-radius: 10px;
    background-color: var(--white);
  }
`;

export const NoticeTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  margin-top: 24px;

  .notice-top-label {
    font-size: 18px;
    font-weight: bold;
    color: var(--text-gray);
    cursor: pointer;
    &.notice-top-label-on {
      color: var(--black);
    }
  }
`;
