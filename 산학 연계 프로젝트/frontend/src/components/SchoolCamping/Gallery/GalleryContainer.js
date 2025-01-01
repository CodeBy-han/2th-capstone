import * as S from "../../../style/SchoolCamping/Gallery/GalleryContainer.style";
import RightIcon from "../../../assets/icon/Schedule/white-right.svg";
import { Link } from "react-router-dom";

const GalleryContainer = ({ children }) => {
  return (
    <S.GalleryContainer>
      <div className="gallery_title">
        <h3>갤러리</h3>
        <Link to={"/schoolcamping/gallery"} className="more">
          <span>더보러 가기</span>
          <img src={RightIcon} alt="Right arrow icon" />
        </Link>
      </div>
      <div className="gallery_content">{children}</div>
    </S.GalleryContainer>
  );
};

export default GalleryContainer;
