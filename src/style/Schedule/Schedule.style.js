import styled from "styled-components";

export const ScheduleArea = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  background-color: var(--white);
  border-radius: 10px;
  margin-top: 24px;

  .schedule-area-top {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
  .schedule-area-top-left,
  .schedule-area-top-right {
    width: 20px;
    height: 20px;
  }

  .schedule-area-top-center {
    font-size: 16px;
    font-weight: bold;
    color: var(--blue);
  }

  .schedule-area-table-top {
    display: flex;
    border-bottom: 1px solid var(--form);
    margin-top: 24px;
    align-items: center;
    justify-content: space-between;
  }

  .schedule-area-table-top-ceil {
    width: calc(100% / 6);
    text-align: center;
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    color: var(--text-gray);
  }

  .schedule-area-table-line {
    display: flex;
    height: 40px;
    border-bottom: 1px solid var(--form);
    align-items: center;
    justify-content: space-between;
  }

  .schedule-area-table-line-ceil {
    width: calc(100% / 6);
    text-align: center;
    font-size: 12px;
    color: var(--text-gray);
  }
`;
