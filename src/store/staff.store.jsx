import { atom } from "recoil";

const staff = atom({
  key: "staff",
  default: {
    isLoggedIn: false,
    StaffId: "",
    name: "",
    profilePicture: "",
    username: "",
    email: "",
    isActive: false,
    isEmailVerified: false,
    isUsernameUpdated: false,
    isOnBoardingCompleted: false,
  },
});

export default staff;
