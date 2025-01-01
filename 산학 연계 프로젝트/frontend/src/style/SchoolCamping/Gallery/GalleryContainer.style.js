import styled from "styled-components";

export const GalleryContainer = styled.div`
  color: #fff;
  background-color: #01ad85;
  height: auto;
  margin: 20px 0 0 0;
  padding: 20px;

  & .gallery_title {
    margin: 0 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .gallery_title h3 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }

  & .more {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .gallery_title span {
    font-size: 14px;
    color: #fff;
  }

  & .gallery_title img {
    width: 16px;
    height: 16px;
  }

  & .gallery_content {
    scrollbar-width: none;
    -ms-overflow-style: none;
    white-space: nowrap;
    overflow-x: auto;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
  }

  & .gallery_content::-webkit-scrollbar {
    display: none;
  }
`;
