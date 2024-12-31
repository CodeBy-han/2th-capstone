import styled from "styled-components";

export const Button = styled.div`
  background-color: var(--white);
  width: ${(props) =>
    props.size === "Full" ? "calc(100% - 24px)" : "calc(50% - 30px)"};
  height: 72px;
  padding: 12px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  .button-top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .button-top-left {
    display: flex;
    align-items: center;
    gap: 8px;
    svg {
      width: 18px;
      height: 18px;
    }
    & path {
      fill: ${(props) => props.color} !important;
    }
  }
  .button-name {
    font-size: 16px;
    font-weight: bold;
    color: ${(props) => props.color};
  }
  .button-top-right {
    width: 14px;
    height: 14px;
  }
  .button-top-right-seemore {
    width: 14px;
    height: 14px;
  }
  .button-bottom {
    display: flex;
    align-items: end;
    gap: 4px;
    margin-top: 36px;
  }
  .button-bottom-count {
    font-size: 18px;
    font-weight: bolder;
    color: ${(props) => props.color || "var(--red)"};
  }
  .button-bottom-text {
    font-size: 12px;
    color: var(--text-gray);
    padding-bottom: 2px;
  }
  &:hover {
    background-color: var(--click);
  }
`;
