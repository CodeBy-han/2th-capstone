import styled from "styled-components";

export const PictureContainer = styled.div`
  .gallery_container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }

  .picture_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.size};
  }

  .picture_container_top {
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    background-color: #959595;
    border-radius: 10%;
    transition: background-color 0.3s ease;
  }

  .picture_container_bottom {
    width: ${(props) => props.size};
    margin-top: 8px;
    text-align: center;
  }

  .picture_detail {
    width: ${(props) => props.size};
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 400;
  }

  .picture_tag {
    text-align: left;
    margin-top: 3px;
    font-size: 12px;
    color: #0085ff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    width: 100%;
  }
`;
