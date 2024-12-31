import styled from "styled-components";

export const Calendar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  .calendar-container {
    border-radius: 10px;
    background: white;
    padding-bottom: 10px;
  }

  .calendar-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    & button {
      border: 0;
      color: #d9d9d9;
      font-weight: bold;
      background: 0;
      padding: 10px;
      cursor: pointer;
    }

    & h2 {
      font-size: 14px;
      color: #01ad85;
    }
  }

  .calendar-table {
    padding: 0 10px;
    text-align: center;
    font-size: 14px;

    & th,
    td {
      width: 38px;
      height: 38px;
      border-radius: 5px;

      @media (max-width: 375px) {
        width: 36px;
        height: 36px;
      }

      @media (max-width: 325px) {
        width: 34px;
        height: 34px;
      }
    }

    & th {
      color: #878789;
    }

    & td {
      cursor: pointer;
      color: white;
      font-size: 24px;
      background: #f7f7f7;
    }

    & .empty-day {
      cursor: default;
      background: #d9d9d9;
    }

    .check {
      background: #01ad85;
    }

    .impossible {
      background: #ff4747;
      font-size: 20px;
    }
  }
`;
