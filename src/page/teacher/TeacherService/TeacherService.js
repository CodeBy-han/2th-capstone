import * as S from "../../../style/Class/Class.style.js";
import * as A from "../../../style/GlobalStyle.style.js";
import Header from "../../../components/Header.js";
import Button from "../../../components/button/Button.js";

const TeacherService = () => {
  const buttons = [
    {
      name: "스쿨캠핑",
      link: "/TeacherSchoolCamping",
      icon: "Bed",
      size: "Full",
      newCount: "4",
      message: "건의 신규 하이라이트",
      color: "var(--green)",
    },
  ];

  return (
    <A.ContentArea>
      <Header name={"교직원 서비스"} depth={1} backLink={"/TeacherMain"} />
      <S.Class>
        <div className="wrap">
          <div className="inner">
            <A.ButtonList>
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
            </A.ButtonList>
          </div>
        </div>
      </S.Class>
    </A.ContentArea>
  );
};

export default TeacherService;
