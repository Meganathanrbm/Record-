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
  },
});

export default staff;
