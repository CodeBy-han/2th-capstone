import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedRoles }) => {
  const userDepth = parseInt(localStorage.getItem("myuserdepth"), 10);
  if (!userDepth) {
    // 로그인 안 된 경우 로그인 페이지로 리다이렉트
    return <Navigate to="/Login" />;
  }

  if (allowedRoles && !allowedRoles.includes(userDepth)) {
    // 권한이 없는 경우 접근 불가 페이지로 리다이렉트
    return <Navigate to="/NotFound" />;
  }

  // 권한이 있는 경우 자식 컴포넌트 렌더링
  return children;
};

export default PrivateRoute;
