import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "../style/GlobalStyle.style";
//icons
import Bell from "../assets/icon/Header/bell.svg";
import Setting from "../assets/icon/Header/setting.svg";
import Back from "../assets/icon/Header/back.svg";
import Bars from "../assets/icon/NavBar/bars.svg";
import Xmark from "../assets/icon/Header/xmark.svg"; // Xmark 아이콘 추가

import HeaderSidebarMenuButton from "./HeaderSidebarMenuButton";

const Header = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 사이드바 상태 관리

  // 사이드바 토글 함수
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <S.Header>
      <div className="wrap">
        <div className="inner">
          <div className="header_left">
            {props.depth > 0 && (
              <Link to={props.backLink} className="header_left_back">
                <img src={Back} alt="Back" />
              </Link>
            )}
            <div className="header_left_title">{props.name}</div>
          </div>
          <div className="header_right">
            <img src={Bell} alt="Notifications" />
            <Link to={"/Setting"}>
              <img src={Setting} alt="Settings" />
            </Link>
            <img
              src={isSidebarOpen ? Xmark : Bars} // 아이콘 전환
              alt="Menu"
              onClick={toggleSidebar} // 클릭 시 사이드바 토글
            />
          </div>
        </div>
      </div>
      {isSidebarOpen && (
        <S.HeaderSidebarBg>
          <S.HeaderSidebar>
            <div className="top-line">
              <div className="inner">
                <div className="top-line-left"></div>
                <div className="top-line-right">
                  <img
                    src={isSidebarOpen ? Xmark : Bars} // 아이콘 전환
                    alt="Menu"
                    onClick={toggleSidebar} // 클릭 시 사이드바 토글
                  />
                </div>
              </div>
            </div>
            <div className="header-sidebar-inner">
              <div className="sidebar-menu-categoriArea">
                <div className="sidebar-menu-title">학급</div>
                <HeaderSidebarMenuButton
                  link={"/ClassNotice"}
                  name={"학급 공지"}
                  icon={"Notice"}
                />
                <HeaderSidebarMenuButton
                  link={"/ClassLetter"}
                  name={"가정통신문"}
                  icon={"Letter"}
                />
                <HeaderSidebarMenuButton
                  link={"/Suggestion"}
                  name={"건의하기"}
                  icon={"Sugg"}
                />
                <HeaderSidebarMenuButton
                  link={"/ClassNotice"}
                  name={"시간표"}
                  icon={"Schedule"}
                />
              </div>

              <div className="sidebar-menu-categoriArea">
                <div className="sidebar-menu-title">학교</div>
                <HeaderSidebarMenuButton
                  link={"/SchoolNotice"}
                  name={"학교 공지"}
                  icon={"Notice"}
                />
                <HeaderSidebarMenuButton
                  link={"/SchoolLetter"}
                  name={"가정통신문"}
                  icon={"Letter"}
                />
                <HeaderSidebarMenuButton
                  link={"/SchoolSchedule"}
                  name={"학사일정"}
                  icon={"Schedule"}
                />
                <HeaderSidebarMenuButton
                  link={"/SchoolFood"}
                  name={"급식표"}
                  icon={"Meal"}
                />
              </div>

              <div className="sidebar-menu-categoriArea">
                <div className="sidebar-menu-title">학생 서비스</div>
                <HeaderSidebarMenuButton
                  link={"/Pass"}
                  name={"외출증 관리"}
                  icon={"Pass"}
                />
                <HeaderSidebarMenuButton
                  link={"/"}
                  name={"외박증 관리"}
                  icon={"Pass"}
                />
                <HeaderSidebarMenuButton
                  link={"/Bus"}
                  name={"귀가버스"}
                  icon={"Bus"}
                />
                <HeaderSidebarMenuButton
                  link={"/Lab"}
                  name={"실습실"}
                  icon={"Lab"}
                />
                <HeaderSidebarMenuButton
                  link={"/Lab"}
                  name={"야간자율학습"}
                  icon={"Book"}
                />
                <HeaderSidebarMenuButton
                  link={"/SchoolCamping"}
                  name={"스쿨캠핑"}
                  icon={"Meal"}
                />
              </div>

              <div className="sidebar-menu-categoriArea">
                <div className="sidebar-menu-title">고교인증제</div>
                <HeaderSidebarMenuButton
                  link={"/Meister"}
                  name={"고교인증제"}
                  icon={"Check"}
                />
              </div>

              <div className="sidebar-menu-categoriArea">
                <div className="sidebar-menu-title">기숙사</div>
                <HeaderSidebarMenuButton
                  link={"/Meister"}
                  name={"기숙사"}
                  icon={"Dor"}
                />
              </div>
            </div>
          </S.HeaderSidebar>
        </S.HeaderSidebarBg>
      )}
      {/* 사이드바가 열렸을 때만 렌더링 */}
    </S.Header>
  );
};

export default Header;
