import dashboard from "../assets/svg/dashboard/dashboardLogo.svg";
import activeDashboard from "../assets/svg/dashboard/activeDashboardLogo.svg";
import activeInstitution from "../assets/svg/institution/institutionActiveLogo.svg";
import institutionLogo from "../assets/svg/institution/institutionLogo.svg";

const navigationConstants = [
  {
    name: "Dashboard",
    path: "/",
    icon: dashboard,
    activeIcon: activeDashboard,
  },
  {
    name: "Institution",
    path: "/institution",
    icon: institutionLogo,
    activeIcon: activeInstitution,
  },
];

export default navigationConstants;
