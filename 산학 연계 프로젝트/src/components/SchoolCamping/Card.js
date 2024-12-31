import * as S from "../../style/SchoolCamping/Card.style";

const Card = ({
  wsize = "Full",
  hsize = "72px",
  background_color,
  head_content,
  head_color,
  body_content,
  body_color,
  footer_content,
  footer_color,
}) => {
  return (
    <S.Card
      background_color={background_color}
      wsize={wsize}
      hsize={hsize}
      head_color={head_color}
      body_color={body_color}
      footer_color={footer_color}
    >
      <div className="card_head">{head_content}</div>
      <div className="card_body">{body_content}</div>
      <div className="card_footer">{footer_content}</div>
    </S.Card>
  );
};

export default Card;
