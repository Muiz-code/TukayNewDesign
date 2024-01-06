import ProfileDetail from "../Components/ProfileDetail";
import icon from "../assets/Ellipse 818.png";
import eye from "../assets/Eye.svg";
import send from "../assets/Send.svg";
import right from "../assets/ChevronRight.svg";
import { buttons } from "../Components/Dummy";
import Tbtn from "../Components/TransactionBtn";

const Dashboard = () => {
  return (
    <div className="flex col flex-col gap-[70px] w-full h-screen ps-[50px] px-10 pt-[60px] text-white">
      <div className="w-[100%] col">
        <ProfileDetail
          welcometext="Welcome to Tukay"
          lastname="Owolabi"
          icon={icon}
          fullname="Muiz Owolabi"
          customerId="Tukay ID: theFrontendGuy"
        />
      </div>
      <div className="col flex flex-col gap-5">
        <div className="flex col place-items-center justify-between gap-5 bg-[#0A221C] w-[40%] p-5 rounded-2xl">
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
        <div className="flex gap-10">
          {buttons.map((Tbtn1) => (
            <Tbtn key={Tbtn1.id} {...Tbtn1} eachStyle={Tbtn1.style} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
