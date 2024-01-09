import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ProfileDetail from "../Components/ProfileDetail";
import icon from "../assets/Ellipse 818.png";
import eye from "../assets/Eye.svg";
import send from "../assets/Send.svg";
import right from "../assets/ChevronRight.svg";
import { buttons } from "../Components/Dummy";
import Tbtn from "../Components/TransactionBtn";
import Card from "../Components/Card";
import send1 from "../assets/AtmCard.svg";
import find from "../assets/Find2k.svg";
import save from "../assets/Padlock.svg";
import request from "../assets/Request.svg";
import img1 from "../assets/Ellipse 4.png";
import img2 from "../assets/Ellipse5.png";
import img3 from "../assets/Ellipse 6.png";
import img4 from "../assets/Ellipse 7.png";
import img5 from "../assets/Ellipse 8.png";

const Dashboard = () => {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({});
      t1.from(["#icon1", "#icon2", "#icon3", "#icon4"], {
        opacity: 0,
        x: "+=30",
        stagger: 0.5,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex col flex-col gap-[30px] w-full h-screen ps-[50px] px-10 pt-[40px] text-white">
      <div className="w-[100%] col">
        <ProfileDetail
          welcometext="Welcome to Tukay"
          lastname="Owolabi"
          icon={icon}
          fullname="Muiz Owolabi"
          customerId="Tukay ID: theFrontendGuy"
        />
      </div>
      <div className="flex w-[100%] gap-5">
        <div className="col flex flex-col w-[50%] p-3 gap-5">
          <div className="flex col place-items-center justify-between gap-5 bg-[#0A221C] w-[100%] p-5 rounded-2xl">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 place-items-center">
                <h1>Available Balance</h1>
                <img src={eye} alt="" />
              </div>
              <div>
                <h1 className="text-3xl">₦2000</h1>
              </div>
            </div>
            <div className="flex gap-5">
              <button className="bg-[#4BF0A5] hover:scale-[1.02] hover:bg-[#9feeca] flex justify-center place-items-center rounded-full p-3">
                <img src={send} alt="" />
              </button>
              <button className="bg-[#4BF0A5] hover:scale-[1.02] hover:bg-[#9feeca] flex justify-center place-items-center rounded-full p-3">
                <img src={right} alt="" />
              </button>
            </div>
          </div>
          <div className="flex gap-5 w-[100%]">
            {buttons.map((Tbtn1) => (
              <Tbtn key={Tbtn1.id} {...Tbtn1} eachStyle={Tbtn1.style} />
            ))}
          </div>
          <h1 className="text-3xl">App Guideline</h1>
          <div
            className="relative bg-[#0a221c] rounded-2xl flex flex-col w-[100%]"
            ref={comp}
          >
            <div id="icon1">
              <Card
                style2="w-[27%]"
                icon1={send1}
                text1="Send"
                style3="hover:scale-[1.05] w-[40%] justify-between flex"
              />
            </div>
            <div id="icon2">
              <Card
                style2="w-[27%]"
                icon1={request}
                text1="Receive"
                style3="hover:scale-[1.05] w-[40%] justify-between flex"
              />
            </div>
            <div id="icon3">
              <Card
                style2="w-[27%]"
                icon1={save}
                text1="Save"
                style3="hover:scale-[1.05] w-[40%] justify-between flex"
              />
            </div>
            <div id="icon4">
              <Card
                style2="w-[27%]"
                icon1={find}
                text1="Find"
                style3="hover:scale-[1.05] w-[40%] justify-between flex"
              />
            </div>
            <div className="flex flex-col absolute right-5 top-3 bg-white rounded-2xl text-black p-5 h-[33vh] w-[40%] justify-start overflow-auto">
              <h1 className="underline">SEND</h1>
              <p>
                Sending is made easy on TUKAY, with just one click and
                authentication you are good to go.
              </p>
            </div>
          </div>
        </div>
        <div className="col flex flex-col w-[50%] p-3 gap-5">
          <div className="flex flex-col col justify-between gap-5 bg-[#0A221C] w-[100%] h-[76vh] p-5 rounded-2xl">
            <h1 className="text-2xl">Recent Transactions</h1>
            <div className="overflow-auto">
              <div className="flex w-[100%]">
                <Card
                  style1="w-[100%]"
                  icon1={img1}
                  text1="₦2000 Received from Oyinkansola Maryam"
                  style3="flex w-[100%] "
                  style2="w-[15%]"
                  text3="Today 12:03PM"
                />
              </div>
              <div className="flex  w-[100%]">
                <Card
                  style1="w-[100%]"
                  icon1={img2}
                  style3="flex w-[100%]"
                  style2="w-[15%]"
                  text1="₦2000 Transfer to Mubarak Owolabi"
                  text3="Today 9:30AM"
                />
              </div>
              <div className="flex  w-[100%]">
                <Card
                  style1="w-[100%]"
                  icon1={img3}
                  text1="₦2000 Transfer to Segun"
                  style3="flex w-[100%]"
                  style2="w-[15%]"
                  text3="Yeasterday 3:00PM"
                />
              </div>
              <div className="flex  w-[100%]">
                <Card
                  style1="w-[100%]"
                  icon1={img4}
                  text1="₦2000 Transfer to Awodokun Oluwatomiwa"
                  style3="flex w-[100%]"
                  style2="w-[15%]"
                  text3="Friday 12:03PM"
                />
              </div>
              <div className="flex  w-[100%]">
                <Card
                  style1="w-[100%]"
                  icon1={img5}
                  text1="₦2000 Received from Oluwanifemi Daneil"
                  style3="flex w-[100%]"
                  style2="w-[15%]"
                  text3="Friday 12:09PM"
                />
              </div>
              <div className="flex  w-[100%]">
                <Card
                  style1="w-[100%]"
                  icon1={img2}
                  text1="₦2000 Receieved from Oluwatomiwa"
                  style3="flex w-[100%]"
                  style2="w-[15%]"
                  text3="Friday 10:30AM"
                />
              </div>
              <div className="flex  w-[100%]">
                <Card
                  style1="w-[100%]"
                  icon1={img1}
                  text1="₦2000 Receieved from Awodokun "
                  style3="flex w-[100%]"
                  style2="w-[15%]"
                  text3="Friday 12:03AM"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
