import Preloader from "../Components/Preloader";
import logo from "../assets/TukayT.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className=" font-spaceGrotesk">
      <div>
        <Preloader />
      </div>
      <div className="logo">
        <div className="logo1">
          <div className="logo2 w-full flex flex-col gap-4 h-screen justify-center place-items-center">
            <div className="flex flex-col gap-5 justify-center w-[30%] ">
              <div className="flex justify-center">
                <h1 className="text-9xl text-[white] font-semibold text-center">
                  WELCOME TO TU<span className="text-[#4BF0A5]">KAY</span>
                </h1>
              </div>
              <div className="border w-[100%] flex flex-col justify-start p-[50px] gap-[50px] text-center rounded-xl bg-[#0A221C]">
                <p className="text-xl text-[white] font-semibold introText">
                  Where your financial transaction has been made easy with just
                  one input, one authentication and and hundreds of receivers in
                  one click!
                </p>
                <Link to="/signin">
                  <button
                    className={`bg-[#26866e] hover:bg-[#386551] hover:scale-[1.02] py-3 px-5 text-[white] text-2xl rounded-lg btn flex justify-center place-items-center gap-3`}
                  >
                    <p>
                      Get <span className="text-[#4BF0A5] ">Started</span>
                    </p>
                    <img src={logo} className="w-[13%]" alt="" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
