import * as S from "../../../style/home/home.stye.js";
import Header from "../../../components/Header.js";
import Button from "../../../components/button/Button.js";
import { Setting } from "../../../components/Setting.js";
import Benner from "../../../assets/img/benner.png";
const Home = () => {
  if (localStorage.getItem("myuserdepth") === "2") {
    window.location.href = "/TeacherMain";
  } else if (localStorage.getItem("myuserdepth") === "3") {
    window.location.href = "/ParentsMain";
  } else if (localStorage.getItem("myuserdepth") === "0") {
    window.location.href = "/AdminMain";
  }

  const buttons = [
    {
      name: "학생 서비스",
      link: "/StudentService",
      icon: "Hat",
      size: "Full",
      newCount: "1",
      message: "건의 신규 하이라이트",
      color: "var(--yellow)",
    },
  ];

  return (
    <S.ContentArea>
      <Header name={Setting.SchoolName} depth={0} />
      <S.Home>
        <div className="wrap">
          <div className="inner">
            <img className="benner" src={Benner} alt="Benner" />
            <S.ButtonList>
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  name={button.name}
                  link={button.link}
                  icon={button.icon}
                  size={button.size}
                  newCount={button.newCount}
                  message={button.message}
                  color={button.color}
                />
              ))}
            </S.ButtonList>
          </div>
        </div>
      </S.Home>
    </S.ContentArea>
  );
};

export default Home;
