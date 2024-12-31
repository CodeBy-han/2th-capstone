import * as S from "../style/GlobalStyle.style";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Notice } from "../assets/icon/Header/headersidebar/notice.svg";
import { ReactComponent as Letter } from "../assets/icon/Header/headersidebar/letter.svg";
import { ReactComponent as Sugg } from "../assets/icon/Header/headersidebar/sugg.svg";
import { ReactComponent as Schedule } from "../assets/icon/Header/headersidebar/schedule.svg";
import { ReactComponent as Meal } from "../assets/icon/Header/headersidebar/meal.svg";
import { ReactComponent as Pass } from "../assets/icon/Header/headersidebar/pass.svg";
import { ReactComponent as Bus } from "../assets/icon/Header/headersidebar/bus.svg";
import { ReactComponent as Lab } from "../assets/icon/Header/headersidebar/lab.svg";
import { ReactComponent as Book } from "../assets/icon/Header/headersidebar/book.svg";
import { ReactComponent as Check } from "../assets/icon/Header/headersidebar/check.svg";
import { ReactComponent as Dor } from "../assets/icon/Header/headersidebar/dormitory.svg";

const iconMap = {
  Notice: Notice,
  Letter: Letter,
  Sugg: Sugg,
  Schedule: Schedule,
  Meal: Meal,
  Pass: Pass,
  Bus: Bus,
  Lab: Lab,
  Book: Book,
  Check: Check,
  Dor: Dor,
};
const HeaderSidebarMenuButton = (props) => {
  const ButtonIcon = iconMap[props.icon] || null;
  const navigate = useNavigate();

  const handleNavigation = () => {
    setTimeout(() => {
      navigate(props.link);
    }, 200); // 200ms = 0.2s
  };

  return (
    <S.HeaderSidebarMenuButton>
      <div className="sidebar-menu-button" onClick={handleNavigation}>
        <div className="sidebar-menu-button-inner">
          {ButtonIcon && <ButtonIcon className="sidebar-menu-button-icon" />}
        </div>
      </div>
      <div className="sidebar-menu-button-text">{props.name}</div>
    </S.HeaderSidebarMenuButton>
  );
};

export default HeaderSidebarMenuButton;
