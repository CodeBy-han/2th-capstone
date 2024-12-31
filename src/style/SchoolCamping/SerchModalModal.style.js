import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .head h3 {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }

  .close_btn {
    border: none;
    background: transparent;
    font-size: 16px;
    color: #888;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #555;
    }
  }

  .serchForm {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .select {
    width: 100%;
    padding: 8px 10px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .serchInputContainer {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .serchInput {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid #d3d3d3;
    border-radius: 4px;
    font-size: 14px;
  }

  .serchBtn {
    padding: 8px 16px;
    font-size: 14px;
    background: #01ad85;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #01ad8580;
    }
  }

  .result {
    margin-top: 10px;
    border-top: 1px solid #d3d3d3;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .spinner {
    margin: 40px;
    width: 50px;
    height: 50px;
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-top: 5px solid #01ad8580;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .userSelectContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: scroll;
  }

  .userSelect {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;

    .btn {
      padding: 5px 10px;
      border-radius: 3px;
      border: 0;
      color: white;
      background-color: #01ad85;
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background: #01ad8580;
      }
    }
  }
`;
