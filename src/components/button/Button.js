import * as S from "../../style/Button/Button.style.js";
import { useNavigate } from "react-router-dom";

//icons
import { ReactComponent as Right } from "../../assets/icon/Button/right.svg";
import { ReactComponent as Bell } from "../../assets/icon/Button/bell.svg";
import { ReactComponent as Hat } from "../../assets/icon/Button/hat.svg";
import { ReactComponent as Pencil } from "../../assets/icon/Button/pencil.svg";
import { ReactComponent as School } from "../../assets/icon/Button/school.svg";
import { ReactComponent as Bed } from "../../assets/icon/Button/bed.svg";
import { ReactComponent as User } from "../../assets/icon/Button/user.svg";
import { ReactComponent as Reserve } from "../../assets/icon/Button/reserve.svg";
import { ReactComponent as Bus } from "../../assets/icon/Button/bus.svg";
import { ReactComponent as Card } from "../../assets/icon/Button/card.svg";
import { ReactComponent as Study } from "../../assets/icon/Button/study.svg";
import { ReactComponent as Time } from "../../assets/icon/Button/time.svg";
import { ReactComponent as Calendar } from "../../assets/icon/Button/calendar.svg";
import { ReactComponent as Food } from "../../assets/icon/Button/food.svg";

const iconMap = {
  Bell: Bell,
  Hat: Hat,
  Pencil: Pencil,
  School: School,
  Bed: Bed,
  User: User,
  Reserve: Reserve,
  Bus: Bus,
  Card: Card,
  Study: Study,
  Time: Time,
  Calendar: Calendar,
  Food: Food,
};

const Button = ({ name, link, icon, size, newCount, message, color }) => {
  const ButtonIcon = iconMap[icon] || null;
  const navigate = useNavigate();

  const handleNavigation = () => {
    setTimeout(() => {
      navigate(link);
    }, 200); // 200ms = 0.2s
  };
  
  return (
    <S.Button color={color} size={size} onClick={handleNavigation}>
      <div className="button-top">
        <div className="button-top-left">
          {ButtonIcon && <ButtonIcon className="button-icon" />}
          <div className="button-name">{name}</div>
        </div>

        <div className="button-top-right">
          <Right className="button-top-right-seemore" />
        </div>
      </div>

      <div className="button-bottom">
        <div className="button-bottom-count">{newCount}</div>
        <div className="button-bottom-text">{message}</div>
      </div>
    </S.Button>
  );
};

export default Button;
