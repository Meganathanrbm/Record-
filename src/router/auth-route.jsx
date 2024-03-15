import { lazy } from "react";

const DashBoard = lazy(() => import("../pages/DashboardPage"));
const Profile = lazy(() => import("../pages/ProfilePage"));

const navigationRoutes = [
  { name: "Dashboard", path: "/", element: <DashBoard /> },
  { name: "Profile", path: "/profile", element: <Profile /> },
];

export default navigationRoutes;
