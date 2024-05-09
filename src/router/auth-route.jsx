import { lazy } from "react";

const DashBoard = lazy(() => import("../pages/DashboardPage"));
const Profile = lazy(() => import("../pages/ProfilePage"));
const Instituion = lazy(() => import("../pages/InstituionPage"));
const Students = lazy(() => import("../pages/StudentsPage/StudentHome"));
const StudentsSearch = lazy(() =>
  import("../pages/StudentsPage/BestPerformingStudents")
);
const StudentsDepartment = lazy(() =>
  import("../pages/StudentsPage/MostActiveDepartments")
);
const StudentsProfile = lazy(() =>
  import("../pages/StudentsPage/StudentProfile")
);

const Placement = lazy(() => import("../pages/PlacementPage"));
const PlacementHomePage = lazy(() =>
  import("../pages/PlacementPage/PlacementHomePage")
);
const PlacementOrganisation = lazy(() =>
  import("../pages/PlacementPage/PlacementOrganisation")
);
const PlacementJobRole = lazy(() =>
  import("../pages/PlacementPage/PlacementJobRole")
);

const navigationRoutes = [
  { name: "Dashboard", path: "/dashboard", element: <DashBoard /> },
  { name: "Profile", path: "/profile", element: <Profile /> },
  { name: "Instituion", path: "/institution", element: <Instituion /> },
  {
    name: "Students",
    path: "/students",
    element: <Students />,
    children: [
      {
        name: "Student_Search",
        path: "/students/search",
        element: <StudentsSearch />,
      },
      {
        name: "Department alone search",
        path: "/students/department",
        element: <StudentsDepartment />,
      },
      {
        name: "Student Profile",
        path: "/students/profile",
        element: <StudentsProfile />,
      },
    ],
  },
  {
    name: "Placement",
    path: "/placement",
    element: <Placement />,
    children: [
      {
        name: "Placement_Home",
        path: "/placement/home",
        element: <PlacementHomePage />,
      },
      {
        name: "Placement_Organization_View",
        path: "/placement/organisationView/:organisation",
        element: <PlacementOrganisation />,
      },
      {
        name: "Placement_Job_Role_View",
        path: "/placement/jobRoleView/:jobRole",
        element: <PlacementJobRole />,
      },
    ],
  },
];

export default navigationRoutes;
