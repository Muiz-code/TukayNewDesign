import Home from "../assets/Home.svg";
import Insight from "../assets/Chart.svg";
import Notification from "../assets/Bell.svg";
import Profile from "../assets/Profile.svg";
import send from "../assets/AtmCard.svg";
import find from "../assets/Find2k.svg";
import save from "../assets/Padlock.svg";
import request from "../assets/Request.svg";

export const pages = [
  {
    id: 1,
    icon: Home,
    pages: "Home",
    pageLink: "/dashboard",
    style:
      "hover:text-[#4BF0A5] rounded-lg hover:scale-[1.02] flex items-center",
  },
  {
    id: 2,
    icon: Insight,
    pages: "Insights",
    pageLink: "/insight",
    style:
      "hover:text-[#4BF0A5] rounded-lg hover:scale-[1.02] flex items-center",
  },
  {
    id: 3,
    icon: Notification,
    pages: "Notifications",
    pageLink: "/notification",
    style:
      "hover:text-[#4BF0A5] rounded-lg hover:scale-[1.02]  flex items-center",
  },

  {
    id: 4,
    icon: Profile,
    pages: "Profile",
    pageLink: "/profile",
    style:
      "hover:text-[#4BF0A5] rounded-lg hover:scale-[1.02]  flex items-center",
  },
];

export const buttons = [
  {
    id: 1,
    icons: send,
    text: "Send",
  },
  {
    id: 2,
    icons: request,
    text: "Receive",
  },
  {
    id: 3,
    icons: save,
    text: "Save",
  },
  {
    id: 4,
    icons: find,
    text: "Request",
  },
];
