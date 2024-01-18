import { useState } from "react";
import { pages } from "./Dummy";
import Page from "../Components/Page";
import logo from "../assets/TukayLogo.png";
import logo1 from "../assets/TukayT.png";
import logout from "../assets/Logout.svg";
import { Outlet } from "react-router-dom";
import { database } from "../Features/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const SideBar = () => {
  // eslint-disable-next-line no-unused-vars
  let eachPage;
  pages.forEach((item) => {
    eachPage = item;
  });

  const [sideBarIsOpen, setSideBarIsOpen] = useState(true);
  console.log(sideBarIsOpen);
  const toogleSideBar = () => {
    setSideBarIsOpen(!sideBarIsOpen);
  };

  const history = useNavigate();

  const handleClick = () => {
    signOut(database).then((val) => {
      console.log(val, "val");
      history("/signin");
    });
  };

  return (
    <div className="flex fixed-top font-spaceGrotesk">
      <div
        className={` bg-[#0A221C] h-screen text-[white] relative ${
          sideBarIsOpen ? "w-[20%] " : "w-[10%] flex flex-col gap-[40px]"
        }`}
      >
        <div className="sideBar h-screen relative">
          <div className="flex items-center">
            <div
              className={`  ${
                sideBarIsOpen
                  ? "flex place-items-center p-[50px] justify-center"
                  : "flex justify-start p-[30px] "
              }`}
              onClick={() => {
                console.log("clicked");
              }}
            >
              <div className={` ${sideBarIsOpen ? "w-[80%]" : "hidden"}`}>
                <img src={logo} className="w-[100%]" alt="" />
              </div>
              <div className={` ${sideBarIsOpen ? "hidden" : "w-[100%]"}`}>
                <img src={logo1} className="w-[100%]" alt="" />
              </div>
            </div>

            <div
              className={`rounded-full absolute right-[-40px] bottom-[350px] bg-[#0A221C] w-[90px] h-[90px] border-2 border-[#113a2f] flex items-center justify-center cursor-pointer ${
                sideBarIsOpen ? "" : "right-0"
              }`}
              onClick={toogleSideBar}
            >
              <img src={logo1} className="w-[50%]" alt="" />
            </div>
          </div>
          <ul className={`py-5 px-3 flex navbarr flex-col gap-[50px]`}>
            {pages.map((nav) => (
              <Page
                key={nav.id}
                {...nav}
                navigationPage={`${sideBarIsOpen ? `${nav.pages}` : ""}`}
                eachStyle={`${
                  sideBarIsOpen
                    ? `${nav.style}`
                    : "w-[100%]  flex justify-center place-items-center"
                }`}
                pageLink={nav.pageLink}
                iconStyle={`${sideBarIsOpen ? "w-[18%]" : "w-[50%] ms-4"}`}
                style={`${sideBarIsOpen ? "" : "hidden"}`}
              />
            ))}
          </ul>
          <div className="absolute bottom-8 flex justify-center w-full">
            <button
              className="bg-[red] hover:bg-[#ff000090] p-3 rounded-xl flex place-items-center gap-3"
              onClick={handleClick}
            >
              <img src={logout} className="" alt="" />
              LogOut
            </button>
          </div>
        </div>
      </div>
      <div className={` ${sideBarIsOpen ? "w-[80%]" : "w-[90%]"}`}>
        <div className="logo">
          <div className="logo1">
            <div className="logo2 w-full h-screen">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
