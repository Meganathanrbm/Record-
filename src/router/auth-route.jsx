import { lazy } from "react";

const DashBoard = lazy(() => import("../pages/DashboardPage"));
const Profile = lazy(() => import("../pages/ProfilePage"));
const Instituion = lazy(() => import("../pages/InstituionPage"));

const navigationRoutes = [
  { name: "Dashboard", path: "/", element: <DashBoard /> },
  { name: "Profile", path: "/profile", element: <Profile /> },
  { name: "Instituion", path: "/institution", element: <Instituion /> },
];

export default navigationRoutes;
