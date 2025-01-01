import * as S from "../../../style/home/home.stye.js";
import Header from "../../../components/Header.js";

const NotFound = () => {
  return (
    <S.ContentArea>
      <Header name={"잘못된 접근"} depth={0} />
      <S.NotFound>
        <div className="wrap">
          <div className="inner">
            <div className="not-found">잘못된 접근입니다.</div>
          </div>
        </div>
      </S.NotFound>
    </S.ContentArea>
  );
};

export default NotFound;
