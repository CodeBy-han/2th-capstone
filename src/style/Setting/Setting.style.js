import styled from "styled-components";
export const Setting = styled.div`
  min-height: calc(100vh - 198px);
  padding-top: 80px;
  padding-bottom: 108px;
`;
export const SettingBox = styled.div`
  width: calc(100% - 32px);
  height: 55px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--white);
  border-radius: 10px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;

  &:first-child {
    margin-top: 24px;
  }

  .toggle_out {
    width: 48px;
    height: 24px;
    background-color: var(--gray);
    border-radius: 100px;
    transition: all 0.2s ease-in-out;
    position: relative;
  }

  .toggle_in {
    width: 20px;
    transition: all 0.2s ease-in-out;
    height: 20px;
    background-color: var(--white);
    border-radius: 100px;
    position: absolute;
    top: 2px;
    left: 2px;
  }

  & > input:checked ~ .toggle_out {
    background-color: var(--blue);
  }
  & > input:checked ~ .toggle_out > .toggle_in {
    left: 26px;
  }
`;

export const Button = styled.div`
  width: calc(50% - 32px);
  height: 55px;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--red);
  font-weight: bold;

  background-color: var(--white);
  border-radius: 10px;
`;
