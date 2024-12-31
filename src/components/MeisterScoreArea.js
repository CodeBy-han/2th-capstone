import * as S from "../style/Meister/Meister.style";
import { ReactComponent as Hat } from "../assets/icon/Button/hat.svg";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Right } from "../assets/icon/Button/right.svg";

const MeisterScoreArea = (props) => {
  let percent_value = (props.value / props.max) * 100;
  console.log(percent_value);
  const navigate = useNavigate();

  const handleNavigation = () => {
    setTimeout(() => {
      navigate(props.link);
    }, 200); // 200ms = 0.2s
  };
  return (
    <S.MeisterScoreArea color={props.color} onClick={handleNavigation}>
      <div className="meister-score-area-top">
        <div className="meister-score-area-top-left">
          <Hat />
          <div className="meister-score-area-top-left-title">{props.title}</div>
        </div>
        <div className="meister-score-area-top-right">
          <Right />
        </div>
      </div>
      <div className="meister-score-area-body">
        <div className="meister-score-area-body-left">MEISTER SCORE</div>
        <div className="meister-score-area-body-right">{props.value} P</div>
      </div>
      <S.MeisterScoreLineChart>
        <S.MeisterScoreLineChartInner
          className="chartInner"
          value={percent_value}
        />
      </S.MeisterScoreLineChart>
      <div className="meister-score-text">
        홍길동님의 {props.name} 점수는 {props.value}점 입니다.
      </div>
    </S.MeisterScoreArea>
  );
};

export default MeisterScoreArea;
