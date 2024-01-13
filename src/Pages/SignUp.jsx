import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { database } from "../Features/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignupSchema = yup.object().shape({
  FullName: yup.string().required(),
  email: yup.string().required(),
  website: yup.string().url(),
  password: yup.string().required(),
});

const SignUp = () => {
  const [action, setAction] = useState(false);

  const history = useNavigate();

  const {
    register,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "Sign Up") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/dashboard");
        })
        .catch((err) => {
          alert(err.code);
          setAction(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/dashboard");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };
  return (
    <div className="logo font-spaceGrotesk">
      <div className="logo1">
        <div className="logo2 w-full flex flex-col gap-4 h-screen justify-center place-items-center">
          <div className="flex flex-col gap-[30px] justify-center place-items-center bg-[#0A221C] px-[50px] py-5 rounded-2xl">
            <div className="flex flex-col gap-5 justify-center place-items-center">
              <div className="flex flex-col justify-start place-items-center">
                <h1 className="text-5xl text-[#4BF0A5]">Welcome to TUKAY</h1>
                {action ? (
                  <p className="text-xl text-[#fff]">
                    Input Your Email And Password To Login
                  </p>
                ) : (
                  <p className="text-xl text-[#fff]">
                    Complete your sign up to get started
                  </p>
                )}
              </div>

              <div className="flex place-items-center justify-center gap-5">
                <div
                  className={`${
                    action === false
                      ? " underline text-[white] border"
                      : "cursor-pointer"
                  }`}
                  onClick={() => setAction(false)}
                >
                  <p className="text-3xl text-[white] mt-4 hover:scale-[1.03]">
                    SignUp
                  </p>
                </div>
                <div
                  className={`${
                    action === true
                      ? "underline text-[white] border"
                      : "cursor-pointer"
                  }`}
                  onClick={() => setAction(true)}
                >
                  <p className="text-3xl text-[white] mt-4 hover:scale-[1.03]">
                    {" "}
                    LogIn
                  </p>
                </div>
              </div>
            </div>
            <form
              className="flex flex-col w-[100%] gap-5 justify-center place-items-center"
              onSubmit={(e) => {
                handleSubmit(e, action ? "Login" : "Sign Up");
              }}
            >
              {action ? (
                <div></div>
              ) : (
                <div className="flex form flex-col gap-1">
                  <label htmlFor="name">FullName</label>
                  <input
                    type="name"
                    name="name"
                    placeholder="Full Name"
                    {...register("FullName")}
                  />
                  {errors.FullName && <p>{errors.FullName.message}</p>}
                </div>
              )}

              <div className="flex form flex-col gap-1">
                <label htmlFor="name">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                  {...register("email")}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>

              <div className="flex form flex-col gap-1">
                {action ? (
                  <label htmlFor="name">Password</label>
                ) : (
                  <label htmlFor="name">Create Password</label>
                )}

                <input
                  type="Password"
                  name="password"
                  placeholder="minimum of 6 characters"
                  {...register(
                    "password",
                    { required: true, maxLength: 6 },
                    { pattern: /^[A-Za-z]+$/i }
                  )}
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>

              <div className="flex flex-col justify-start place-items-center gap-4">
                <div className="flex gap-3 ">
                  {action ? (
                    <p className="text-[white]">
                      Don’t have an account?
                      <Link to="/">
                        <span className="text-[#4BF0A5] cursor-pointer hover:text-[#4bf0a6ae]">
                          Sign up
                        </span>
                      </Link>
                    </p>
                  ) : (
                    <div className="flex gap-3">
                      <input type="checkbox" className="border bg-" />
                      <p className="text-[white]">
                        By signing up, you agree to the{" "}
                        <span className="text-[#4BF0A5]">
                          {" "}
                          Terms of Service and Privacy Policy
                        </span>
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex gap-4 w-[100%] justify-center px-4">
                  <button
                    type="submit"
                    className={`bg-[#4BF0A5] hover:bg-[#4BF0A5] hover:scale-[1.02] py-3 px-5  rounded-lg btn`}
                  >
                    {action ? "LogIn" : "Sign Up"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
