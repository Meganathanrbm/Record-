import { lazy } from "react";

const DashBoard = lazy(() => import("../pages/DashboardPage"));
const Profile = lazy(() => import("../pages/ProfilePage"));
const Instituion = lazy(() => import("../pages/InstituionPage"));
const Students = lazy(() => import("../pages/StudentsPage"));
const Placement = lazy(() => import("../pages/PlacementPage"));

const navigationRoutes = [
  { name: "Dashboard", path: "/", element: <DashBoard /> },
  { name: "Profile", path: "/profile", element: <Profile /> },
  { name: "Instituion", path: "/institution", element: <Instituion /> },
  { name: "Students", path: "/students", element: <Students /> },
  { name: "Placement", path: "/placement", element: <Placement /> },
];

export default navigationRoutes;
