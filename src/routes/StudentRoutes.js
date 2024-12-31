import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute.js";

// Student pages
import Home from "../page/student/Home/Home.js";
import StudentService from "../page/student/StudentService/StudentService.js";
import SchoolCamping from "../page/student/SchoolCamping/SchoolCamping.js";
import SchoolCampingApply from "../page/student/SchoolCamping/apply/SchoolCampingApply.js";
import SchoolCampingGallery from "../page/student/SchoolCamping/gallery/SchoolCampingGallery.js";

// (추가로 다른 학생 페이지 import)

const StudentRoutes = [
  <Route
    path="/"
    element={
      <PrivateRoute allowedRoles={[0, 1, 2, 3]}>
        <Home />
      </PrivateRoute>
    }
  />,
  <Route
    path="/StudentService"
    element={
      <PrivateRoute allowedRoles={[1]}>
        <StudentService />
      </PrivateRoute>
    }
  />,
  <Route
    path="/SchoolCamping"
    element={
      <PrivateRoute allowedRoles={[1]}>
        <SchoolCamping />
      </PrivateRoute>
    }
  ></Route>,
  <Route
    path="/SchoolCamping/apply"
    element={
      <PrivateRoute allowedRoles={[1]}>
        <SchoolCampingApply />
      </PrivateRoute>
    }
  ></Route>,
  <Route
    path="/SchoolCamping/gallery"
    element={
      <PrivateRoute allowedRoles={[1]}>
        <SchoolCampingGallery />
      </PrivateRoute>
    }
  ></Route>,
];

export default StudentRoutes;
