import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";

// Teacher pages
import TeacherMain from "../page/teacher/TeacherMain/TeacherMain.js";
import TeacherService from "../page/teacher/TeacherService/TeacherService.js";

const TeacherRoutes = [
  <Route
    path="/TeacherMain"
    element={
      <PrivateRoute allowedRoles={[2]}>
        <TeacherMain />
      </PrivateRoute>
    }
  />,

  <Route
    path="/TeacherService"
    element={
      <PrivateRoute allowedRoles={[2]}>
        <TeacherService />
      </PrivateRoute>
    }
  />,
];

export default TeacherRoutes;
