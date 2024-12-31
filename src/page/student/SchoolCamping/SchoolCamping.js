import * as S from "../../../style/Class/Class.style.js";
import * as A from "../../../style/GlobalStyle.style.js";
import Header from "../../../components/Header.js";
import Card from "../../../components/SchoolCamping/Card.js";
import GalleryContainer from "../../../components/SchoolCamping/Gallery/GalleryContainer.js";
import styled from "styled-components";
import PictureContainer from "../../../components/SchoolCamping/Gallery/PictureContainer.js";
import { useNavigate } from "react-router-dom";
import { Pictures } from "./data/Pictures.js";

const TestBtn = styled.button`
  float: right;
  padding: 6px 18px;
  border-radius: 6px;
  border: 0;
  background-color: #01ad85;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #028d6b;
  }
`;

const SchoolCamping = () => {
  const navigate = useNavigate();
  const Cards = [
    {
      background_color: "#01AD85",
      wsize: "Full",
      head_content: "이번 달 스쿨캠핑 신청일",
      head_color: "#fff",
      body_content: "9월 10일 화요일",
      body_color: "#fff",
      footer_content: "선생님에게 외출증을 받아가세요!",
      footer_color: "#fff",
    },
    {
      background_color: "#fff",
      wsize: "Full",
      head_content: "스쿨캠핑 신청하기",
      head_color: "#01AD85",
      body_content: "마지막 스쿨캠핑 날짜 : 8월 8일 월요일",
      body_color: "#01AD85",
      footer_content: (
        <TestBtn onClick={() => navigate("/SchoolCamping/apply")}>
          신청하기
        </TestBtn>
      ),
      footer_color: "#01AD85",
    },
  ];

  return (
    <A.ContentArea>
      <Header name={"스쿨캠핑"} depth={1} backLink={"/"} />
      <S.Class>
        <div className="wrap">
          <div className="inner">
            <A.ButtonList>
              {Cards.map((card, index) => (
                <Card
                  key={index}
                  background_color={card.background_color}
                  wsize={card.wsize}
                  head_content={card.head_content}
                  head_color={card.body_color}
                  body_content={card.body_content}
                  body_color={card.body_color}
                  footer_content={card.footer_content}
                  footer_color={card.footer_color}
                />
              ))}
            </A.ButtonList>
          </div>
          <GalleryContainer>
            {Pictures.map((picture, index) => (
              <PictureContainer
                key={index}
                likCount={picture.picture_likeCount}
                date={picture.picture_date}
                tag={picture.picture_tag}
              />
            ))}
          </GalleryContainer>
        </div>
      </S.Class>
    </A.ContentArea>
  );
};

export default SchoolCamping;
