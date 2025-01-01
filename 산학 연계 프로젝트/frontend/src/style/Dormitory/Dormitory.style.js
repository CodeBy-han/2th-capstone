import styled from "styled-components";

export const Dormitory = styled.div`
  min-height: calc(100vh - 198px);
  padding-top: 80px;

  padding-bottom: 108px;
`;

export const DormitoryMyRoom = styled.div`
  width: 100%;
  margin-top: 24px;
  .dormitory-top {
    width: calc(100% - 32px);
    padding: 16px;
    background-color: var(--white);
    border-radius: 10px;
  }
  .dormitory-top-title {
    font-size: 16px;
    font-weight: bold;
    color: var(--blue);
  }
`;

export const DormitoryStudentList = styled.div`
  display: block;
  background-color: var(--white);
  margin-top: 12px;
  border-radius: 10px;
  padding: 16px;
  width: calc(100% - 32px);

  .dormitory-student-list-top {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    gap: 8px;
    & > div {
      font-size: 16px;
      font-weight: bold;
      color: var(--blue);
    }
  }

  .dormitory-student-list {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
`;

export const DormitoryStudentState = styled.div`
  width: calc(50% - 30px);
  padding-left: 12px;
  padding-right: 12px;
  background-color: var(--form);
  border-radius: 5px;
  display: flex;
  font-size: 14px;
  height: 36px;
  align-items: center;
  justify-content: space-between;

  .student-state-left {
    color: var(--text-gray);
  }
  .student-state-right {
    color: var(--blue);
    font-weight: bold;
  }
`;

export const DormitoryOut = styled.div``;
export const DormitoryOutList = styled.div`
  background-color: var(--white);
  border-radius: 10px;
`;
