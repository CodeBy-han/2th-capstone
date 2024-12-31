import * as S from "../../../style/SchoolCamping/Gallery/PictureContainer.style";
import React from "react";

const PictureContainer = ({
  date = new Date(),
  tag = ["김한결", "이승찬", "윤영재"],
  likCount = 13,
}) => {
  const updateTag = "#" + tag.join(" #");
  const updateDate = new Date(date).toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return (
    <S.PictureContainer size={"120px"} className="gallery_container">
      <div className="picture_container">
        <div className="picture_container_top"></div>
        <div className="picture_container_bottom">
          <div className="picture_detail">
            <div>♡ {likCount}</div>
            <div>{updateDate}</div>
          </div>
          <div className="picture_tag">{updateTag}</div>
        </div>
      </div>
    </S.PictureContainer>
  );
};

export default React.memo(PictureContainer);
