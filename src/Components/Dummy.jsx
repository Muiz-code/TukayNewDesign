import Home from "../assets/Home.svg";
import Insight from "../assets/Chart.svg";
import Notification from "../assets/Bell.svg";
import Profile from "../assets/Profile.svg";

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
