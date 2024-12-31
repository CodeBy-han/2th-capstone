import * as S from "../../../../style/Class/Class.style.js";
import * as A from "../../../../style/GlobalStyle.style.js";
import Header from "../../../../components/Header.js";
import PictureContainer from "../../../../components/SchoolCamping/Gallery/PictureContainer";
import styled from "styled-components";
import { Pictures } from "../data/Pictures.js";

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  width: calc(100% - 20px);
  width: 100%;
  max-width: 1200px;
  margin: 20px auto 0 auto;
  justify-items: center;
  align-items: center;
`;

const SchoolCampingGallery = () => {
  return (
    <A.ContentArea>
      <Header name={"스쿨캠핑 갤러리"} depth={1} backLink={"/schoolcamping"} />
      <S.Class>
        <div className="wrap">
          <div className="inner">
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
        </div>
      </S.Class>
    </A.ContentArea>
  );
};

export default SchoolCampingGallery;
