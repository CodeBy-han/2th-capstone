import styled from "styled-components";

export const Bus = styled.div`
  min-height: calc(100vh - 198px);
  padding-top: 80px;
  padding-bottom: 108px;
  .historyArea {
    margin-top: 24px;
    border-radius: 10px;
    background-color: var(--white);
  }
`;

export const ButtonList = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const BusTopArea = styled.div`
  width: calc(100% - 24px);
  padding: 12px;
  height: 98px;
  border-radius: 10px;
  background-color: var(--white);
  position: relative;

  .bus-top-area-title {
    font-size: 16px;
    font-weight: bold;
    color: var(--blue);

    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      width: 16px;
      height: 16px;
      path {
        fill: var(--blue);
      }
    }
  }
  .bus-3d {
    position: absolute;
    top: 50%;
    transform: translateY(-50%) !important;
    right: 24px;
  }
  .bus-top-area-bottom {
    display: flex;
    align-items: end;
    gap: 8px;
    position: absolute;
    bottom: 12px;
    left: 12px;
  }

  .bus-top-area-bottom-time {
    font-size: 18px;
    font-weight: bold;
    color: var(--blue);
  }

  .bus-top-area-bottom-text {
    font-size: 12px;
    color: var(--text-gray);
  }

  .bus-top-subtitle {
    font-size: 14px;
    color: var(--text-gray);
    margin-top: 8px;
  }
`;

export const TicketArea = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  border-radius: 10px;
  background-color: var(--white);
  margin-bottom: 12px;
  margin-top: 24px;

  .ticket-top-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .ticket-top-left {
      font-size: 16px;
      font-weight: bold;
      color: var(--blue);
    }

    .ticket-top-right {
      color: var(--text-gray);
      font-size: 12px;
    }
  }
  .ticket-text {
    font-size: 14px;
    color: var(--text-gray);
    & > strong {
      color: var(--black);
      font-weight: bold;
    }
  }
  .ticket-contents {
    width: calc(100% - 24px);
    padding: 12px;
    margin-top: 12px;
    border-radius: 10px;
    background-color: var(--form);
    height: 104px;
    position: relative;
    .bus-icon {
      width: 64px;
      height: 64px;
      position: absolute;
      bottom: 16px;
      right: 16px;
    }
    .ticket-contents-line {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 8px;
      .ticket-contents-label {
        font-size: 14px;
        width: 54px;
        color: var(--text-gray);
      }
      .ticket-contents-text {
        font-size: 14px;
        color: var(--black);
        font-weight: bold;
      }
    }
  }
`;

export const BusStudent = styled.div`
  margin-top: 12px;

  width: calc(100% - 32px);
  padding: 16px;
  border-radius: 10px;
  background-color: var(--white);

  .studentList {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`;

export const BusControler = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  .bus-controler-title {
    font-weight: bold;
    color: var(--blue);
  }
`;
