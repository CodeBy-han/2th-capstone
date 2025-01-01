import styled from "styled-components";

export const NoticeItem = styled.div`
  width: 100%;
  margin-bottom: 12px;
  border-radius: 10px;
  background-color: var(--white);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  .noticeItem-inner {
    width: calc(100% - 32px);
    padding: 16px;
  }
  .noticeItem-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .noticeItem-top-left {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .noticeItem-top-label {
    font-size: 16px;
    font-weight: bold;
    color: var(--blue);
  }

  .noticeItem-top-title {
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
  }

  .noticeItem-top-right {
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 4px;

    span {
      height: 16px;
      display: flex;
      align-items: center;
      color: var(--text-gray);
    }
  }

  .noticeItem-content-show {
    margin-top: 8px;
    font-size: 12px;
    height: 18px;
    color: var(--text-gray);
    width: calc(100% - 24px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .noticeItem-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
  }

  .noticeItem-bottom-left {
    font-size: 12px;
    color: var(--text-gray);
  }
  .noticeItem-bottom-right {
    font-size: 14px;
    font-weight: bold;

    &.wait {
      color: var(--red);
    }
    &.read {
      color: var(--blue);
    }
  }

  &:hover {
    background-color: var(--click);
  }
`;

export const NoticeSearchBar = styled.div`
  width: calc(100% - 32px);
  background-color: var(--click);
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  height: 35px;
  align-items: center;
  margin-bottom: 12px;
  border-radius: 10px;
  justify-content: space-between;

  input {
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: bold;
    font-size: 12px;
    color: var(--strong-gray);
  }
`;
