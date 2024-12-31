import * as S from "../style/School/School.style.js";

const SccContentItem = ({ date, eventName }) => {
  return (
    <S.SccContentItem>
      <div className="scc-content-item-left">{date}</div>
      <div className="scc-content-item-right">{eventName}</div>
    </S.SccContentItem>
  );
};

export default SccContentItem;
