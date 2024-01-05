import MyForm from "../Components/MyForm";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="logo w-full flex h-screen justify-center place-items-center ">
      <div className="logo1 w-full flex h-screen justify-center place-items-center">
        <div className="logo2 w-full flex flex-col gap-4 h-screen justify-center place-items-center">
          <div className="flex flex-col gap-[60px] justify-center place-items-center bg-[#0A221C] px-[150px] py-[50px] rounded-2xl">
            <div className="flex flex-col justify-center place-items-center">
              <h1 className="text-5xl text-[#4BF0A5]">Welcome to TUKAY</h1>
              <p className="text-[white]">
                Complete your sign up to get started
              </p>
            </div>
            <div className="flex flex-col w-[100%] gap-5">
              <div className="flex flex-col gap-5 justify-center place-items-center">
                <MyForm
                  label="Email"
                  type="email"
                  placeholder="example@mail.com"
                />
                <MyForm
                  label="Password"
                  type="Password"
                  placeholder="Letters@1"
                />
              </div>
              <div className="flex flex-col justify-start place-items-center gap-4">
                <div className="flex w-[60%] gap-3">
                  <p className="text-[white]">
                    Don’t have an account?{" "}
                    <Link to="/">
                      <span className="text-[#4BF0A5] cursor-pointer hover:text-[#4bf0a6ae]">
                        {" "}
                        Sign up
                      </span>
                    </Link>
                  </p>
                </div>
                <Link to="/dashboard">
                  <div className="bg-[#4BF0A5] hover:bg-[#4bf0a6ae] hover:scale-[1.02] py-3 px-5 rounded-lg">
                    <button>Log In</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
