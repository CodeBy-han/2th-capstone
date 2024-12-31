import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "../style/GlobalStyle.style";

// icons
import Home from "../assets/icon/NavBar/Home.svg";
import C3 from "../assets/icon/NavBar/3c.svg";
import Hat from "../assets/icon/NavBar/hat.svg";
import User from "../assets/icon/NavBar/user.svg";
import Bed from "../assets/icon/NavBar/bed.svg";

const NavBar = () => {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const navbarItems = document.querySelectorAll(".navbar-item");

    navbarItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === currentPath) {
        item.classList.add("active");
      }
    });
  }, [location]);

  if (localStorage.getItem("myuserdepth") === "1") {
    return (
      <S.NavBar>
        <div className="wrap">
          <Link to="/" className="navbar-item" id="navbar-home">
            <img src={Home} alt="home" className="navbar-item-img" />
            <div className="navbar-item-text">홈</div>
          </Link>
          <Link to="/Meister" className="navbar-item" id="navbar-3c">
            <img src={C3} alt="3C" className="navbar-item-img" />
            <div className="navbar-item-text">고교인증제</div>
          </Link>
          <Link to="/StudentService" className="navbar-item" id="navbar-stuSer">
            <img src={Hat} alt="class" className="navbar-item-img" />
            <div className="navbar-item-text">학생서비스</div>
          </Link>

          <Link to="/Dormitory" className="navbar-item" id="navbar-menu">
            <img src={Bed} alt="menu" className="navbar-item-img" />
            <div className="navbar-item-text">기숙사</div>
          </Link>
          <Link to="/Mypage" className="navbar-item" id="navbar-mypage">
            <img src={User} alt="mypage" className="navbar-item-img" />
            <div className="navbar-item-text">마이페이지</div>
          </Link>
        </div>
      </S.NavBar>
    );
  } else if (localStorage.getItem("myuserdepth") === "2") {
    return (
      <S.NavBar>
        <div className="wrap">
          <Link to="/TeacherMain" className="navbar-item" id="navbar-home">
            <img src={Home} alt="home" className="navbar-item-img" />
            <div className="navbar-item-text">홈</div>
          </Link>
          <Link to="/TeacherClass" className="navbar-item" id="navbar-menu">
            <img src={Hat} alt="menu" className="navbar-item-img" />
            <div className="navbar-item-text">학급관리</div>
          </Link>
          <Link to="/TeacherMeister" className="navbar-item" id="navbar-3c">
            <img src={C3} alt="3C" className="navbar-item-img" />
            <div className="navbar-item-text">마이스터관리</div>
          </Link>
          <Link to="/TeacherService" className="navbar-item" id="navbar-stuSer">
            <img src={Hat} alt="class" className="navbar-item-img" />
            <div className="navbar-item-text">교직원서비스</div>
          </Link>

          <Link
            to="/TeacherDormitory"
            className="navbar-item"
            id="navbar-mypage"
          >
            <img src={Bed} alt="mypage" className="navbar-item-img" />
            <div className="navbar-item-text">기숙사관리</div>
          </Link>
        </div>
      </S.NavBar>
    );
  } else if (localStorage.getItem("myuserdepth") === "3") {
    return (
      <S.NavBar>
        <div className="wrap">
          <Link to="/" className="navbar-item" id="navbar-home">
            <img src={Home} alt="home" className="navbar-item-img" />
            <div className="navbar-item-text">홈</div>
          </Link>
          <Link to="/Meister" className="navbar-item" id="navbar-3c">
            <img src={C3} alt="3C" className="navbar-item-img" />
            <div className="navbar-item-text">고교인증제</div>
          </Link>
          <Link to="/StudentService" className="navbar-item" id="navbar-stuSer">
            <img src={Hat} alt="class" className="navbar-item-img" />
            <div className="navbar-item-text">학생서비스</div>
          </Link>

          <Link to="/Dormitory" className="navbar-item" id="navbar-menu">
            <img src={Bed} alt="menu" className="navbar-item-img" />
            <div className="navbar-item-text">기숙사</div>
          </Link>
          <Link to="/Mypage" className="navbar-item" id="navbar-mypage">
            <img src={User} alt="mypage" className="navbar-item-img" />
            <div className="navbar-item-text">마이페이지</div>
          </Link>
        </div>
      </S.NavBar>
    );
  } else if (localStorage.getItem("myuserdepth") === "0") {
    return (
      <S.NavBar>
        <div className="wrap">
          <Link to="/" className="navbar-item" id="navbar-home">
            <img src={Home} alt="home" className="navbar-item-img" />
            <div className="navbar-item-text">홈</div>
          </Link>
          <Link to="/Meister" className="navbar-item" id="navbar-3c">
            <img src={C3} alt="3C" className="navbar-item-img" />
            <div className="navbar-item-text">고교인증제</div>
          </Link>
          <Link to="/StudentService" className="navbar-item" id="navbar-stuSer">
            <img src={Hat} alt="class" className="navbar-item-img" />
            <div className="navbar-item-text">학생서비스</div>
          </Link>

          <Link to="/Dormitory" className="navbar-item" id="navbar-menu">
            <img src={Bed} alt="menu" className="navbar-item-img" />
            <div className="navbar-item-text">기숙사</div>
          </Link>
          <Link to="/Mypage" className="navbar-item" id="navbar-mypage">
            <img src={User} alt="mypage" className="navbar-item-img" />
            <div className="navbar-item-text">마이페이지</div>
          </Link>
        </div>
      </S.NavBar>
    );
  }
};

export default NavBar;
