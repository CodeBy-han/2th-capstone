import styled from "styled-components";

export const EveningStudy = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  margin-top: 24px;
  border-radius: 10px;
  background-color: var(--white);

  .evening-study-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .evening-study-top-left {
    font-size: 16px;
    font-weight: bold;
    color: var(--blue);
  }
  .evening-study-top-right {
    font-size: 12px;
    color: var(--text-gray);
  }

  .evening-study-body {
    width: 100%;
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .evening-button {
    width: 100%;
    height: 45px;
    border-radius: 10px;
    background-color: var(--blue);
    color: var(--white);
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
  }
`;

export const EveningStudyItem = styled.div`
  width: calc(50% - 30px);
  background-color: var(--white);
  border-radius: 5px;
  display: flex;
  padding-left: 12px;
  padding-right: 12px;
  justify-content: space-between;
  align-items: center;
  background-color: var(--form);
  height: 36px;

  .evening-study-item-left {
    font-size: 12px;
    color: var(--strong-gray);
  }
  .evening-study-item-right {
    font-size: 12px;
    color: var(--blue);
    font-weight: bold;
  }
`;
