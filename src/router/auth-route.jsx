import { lazy } from "react";

const DashBoard = lazy(() => import("../pages/DashboardPage"));

const navigationRoutes = [
  { name: "Dashboard", path: "/", element: <DashBoard /> },
];

export default navigationRoutes;
