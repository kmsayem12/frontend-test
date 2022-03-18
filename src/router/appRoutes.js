import React, { lazy, Suspense } from "react";
import {
  Route,
  Navigate,
  BrowserRouter as Router,
  Routes,
  useLocation,
  Outlet,
} from "react-router-dom";
import { Spin } from "antd";

const Login = lazy(() => import("../screens/Login"));
const Device = lazy(() => import("../screens/Device"));

function PrivateRoute() {
  const location = useLocation();
  const isLoggedIn = false;
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
}

function AppRoutes() {
  return (
    <div>
      <Suspense fallback={<Spin size="large" />}>
        <Router>
          <Routes>
            <Route path="" element={<Login />} />
            <Route path="" element={<PrivateRoute />}>
              <Route path="/device/" element={<Device />} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default AppRoutes;
