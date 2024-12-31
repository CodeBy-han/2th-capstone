import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import * as S from "./style/GlobalStyle.style";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

//components
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute

//All pages
import Setting from "./page/all/Setting/Setting.js";
import Login from "./page/all/Login/Login.js";
import NotFound from "./page/student/NotFound/NotFound";

// Separated Routes
import StudentRoutes from "./routes/StudentRoutes.js";
import TeacherRoutes from "./routes/TeacherRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <S.GlobalStyle>
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Setting"
          element={
            <PrivateRoute allowedRoles={[0, 1, 2, 3]}>
              <Setting />
            </PrivateRoute>
          }
        />

        {/* Student Routes */}
        {StudentRoutes}

        {/* Teacher Routes */}
        {TeacherRoutes}

        {/* Fallback route for unmatched URLs */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  </S.GlobalStyle>
);

serviceWorkerRegistration.register();
