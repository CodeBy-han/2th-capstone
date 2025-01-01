import styled from "styled-components";

export const Meister = styled.div`
  min-height: calc(100vh - 198px);
  padding-top: 80px;
  padding-bottom: 108px;

  .wrap {
    overflow-y: scroll;
  }
  .sch-schedule-calendar {
    width: calc(100% - 32px);
    padding: 16px;
    margin-top: 24px;
    background-color: var(--white);
    border-radius: 10px;

    .scc-content-top {
      margin-bottom: 16px;
    }
  }

  .ssc-table-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    margin-bottom: 2px;
    border-bottom: 1px solid var(--form);
  }

  .ssc-table-top-ceil {
    width: calc((100% - 24px) / 7);
    text-align: center;
    heiht: 24px;
    line-height: 24px;
    font-size: 12px;
    color: var(--text-gray);
  }

  .scc-table-body {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
  }

  .scc-table-ceil {
    width: calc(((100% - 24px) / 7) - 16px);
    height: 34px;
    padding: 8px;
    font-size: 12px;
    color: var(--text-gray);
    background-color: var(--form);
    border-radius: 5px;
  }
  .scc-table-ceil-no {
    opacity: 0.3;
  }

  .scc-table-ceil-on {
    background-color: var(--blue);
    color: var(--white);
  }

  .scc-content {
    width: calc(100% - 32px);
    padding: 16px;
    margin-top: 12px;
    border-radius: 10px;
    margin-bottom: 30px;
    background-color: var(--white);
  }

  .scc-content-top {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    .scc-content-top-left {
      width: 20px;
      height: 20px;
    }
    .scc-content-top-right {
      width: 20px;
      height: 20px;
    }
    .scc-content-top-center {
      font-size: 16px;
      font-weight: bold;
      color: var(--blue);
    }
  }

  .scc-content-body {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 24px;
    gap: 12px;
    justify-content: space-between;
  }

  .scc-food-itemList {
    width: calc(100% - 32px);
    padding: 16px;
    border-radius: 10px;
    background-color: var(--white);
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .scc-food-item {
    width: calc(100% - 24px);
    padding: 12px;
    position: relative;
    min-height: 42px;
    background-color: var(--form);
    border-radius: 10px;
  }

  .scc-food-item-kcal {
    position: absolute;
    top: 12px;
    right: 12px;
    font-size: 12px;
    color: var(--text-gray);
  }

  .scc-food-item-label {
    position: absolute;
    bottom: 12px;
    right: 12px;
    font-size: 14px;
    color: var(--blue);
    font-weight: bold;
  }

  .scc-food-item-text {
    font-size: 12px;
    line-height: 18px;
  }

  .scc-food-item-on {
    background-color: var(--blue);
    color: var(--white);
    .scc-food-item-label {
      color: var(--white);
    }
    .scc-food-item-kcal {
      color: var(--white);
    }
  }
`;
export const MeisterArea = styled.div`
  margin-top: 24px;

  .MeisterHistory {
    background-color: var(--white);
    border-radius: 10px;
    margin-top: 0px;
    margin-bottom: 60px;
  }
`;

export const MeisterScoreArea = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 12px;
  background-color: var(--white);
  transition: all 0.2s ease-in-out;

  .meister-score-area-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .meister-score-area-top-left {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 18px;
    font-size: 16px;
    font-weight: bold;
    color: ${(props) => props.color};
    svg {
      width: 18px;
      height: 18px;
    }
    path {
      fill: ${(props) => props.color};
    }
  }
  .meister-score-area-top-right {
    width: 12px;
    height: 12px;
    svg {
      width: 12px;
      height: 12px;
    }
  }

  .meister-score-area-body {
    margin-top: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .meister-score-area-body-left {
      font-size: 14px;
      color: var(--strong-gray);
    }
    .meister-score-area-body-right {
      font-size: 18px;
      color: ${(props) => props.color};
      font-weight: bolder;
    }
  }

  .chartInner {
    background-color: ${(props) => props.color};
  }

  .meister-score-text {
    font-size: 12px;
    text-align: center;
    margin-top: 12px;
    color: var(--strong-gray);
  }
  &:hover {
    background-color: var(--click);
  }
`;

export const MeisterScoreLineChart = styled.div`
  width: 100%;
  border-radius: 100px;
  background-color: var(--form);
  height: 24px;
  margin-top: 12px;
  display: flex;
  justify-content: left;
`;
export const MeisterScoreLineChartInner = styled.div`
  width: ${(props) => props.value}%;
  height: 24px;
  border-radius: 100px;
`;

export const ButtonList = styled.div`
  width: 100%;
  gap: 12px;
  display: flex;
  flex-wrap: wrap;
`;

export const SemesterSelecter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  background-color: var(--white);
  gap: 16px;
  border-radius: 10px;
  margin-bottom: 12px;
  & > div {
    height: 100%;
    display: flex;
    align-items: center;
  }

  & svg {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      filter: brightness(0);
    }
  }

  & > .select-center {
    color: var(--blue);
    font-weight: bold;
  }
`;

export const MeisterRequestButton = styled.div``;
export const MeisterForm = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  border-radius: 10px;
  background-color: var(--white);

  .meister-form-topline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .meister-form-topline-left {
      font-size: 16px;
      color: var(--blue);
      font-weight: bold;
    }
    .meister-form-topline-right {
      color: var(--text-gray);
      font-size: 12px;
    }
  }
`;
