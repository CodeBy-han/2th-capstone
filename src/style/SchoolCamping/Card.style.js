import styled from "styled-components";

export const Card = styled.div`
  background-color: ${(props) => props.background_color};
  width: ${(props) =>
    props.wsize === "Full" ? "calc(100% - 24px)" : "calc(50% - 30px)"};
  height: ${(props) => props.hsize};
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  & div:nth-child(3) {
    margin-top: 14px;
  }

  .card_head {
    font-size: 16px;
    font-weight: 800;
    color: ${(props) => props.head_color};
  }

  .card_body {
    font-size: 10px;
    font-weight: 350;
    color: ${(props) => props.head_color};
  }

  .card_footer {
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.footer_color};
  }
`;
