import styled from "styled-components";
export const School = styled.div`
  min-height: calc(100vh - 198px);
  padding-top: 80px;
  padding-bottom: 108px;

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

export const SccContentItem = styled.div`
  width: calc((100%) - 24px);
  padding-left: 12px;
  padding-right: 12px;
  background-color: var(--form);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  .scc-content-item-left {
    font-size: 12px;
    color: var(--strong-gray);
  }
  .scc-content-item-right {
    font-size: 14px;
    font-weight: bold;
    color: var(--blue);
  }
`;
