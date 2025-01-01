import { Link } from "react-router-dom";
import "./viewHeader.css";

const ViewHeader = () => {
  return (
    <div className="view_header single-day-regular">
      <Link to={"/"}>
        <h1 className="view_header_h1">유메쳇</h1>
      </Link>
      <div className="view_nav_container">
        <Link to={"/login"} className="login_btn">
          로그인
        </Link>
        <Link to={"/register"} className="register_btn">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default ViewHeader;
