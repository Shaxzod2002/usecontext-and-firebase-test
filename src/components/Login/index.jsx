import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../Contexts/LoginContext";

const Login = () => {
  const { setEmail, setUserName, setPhone, createUser } =
    useContext(LoginContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="home w-[600px] min-h-[400px] bg-white rounded-xl shadow-md p-2 flex justify-center items-center flex-col gap-4">
        <h2 className="text-center text-3xl">Create User Page</h2>
        <form className="w-full flex flex-col items-center justify-center gap-8">
          <label className="text-xl w-[90%] flex flex-col gap-2">
            User Name
            <input
              type="text"
              name="name"
              className="border border-black rounded-lg outline-none px-3 py-2"
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label className="text-xl w-[90%] flex flex-col gap-2">
            Email Address
            <input
              type="email"
              name="email"
              className="border border-black rounded-lg outline-none px-3 py-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="text-xl w-[90%] flex flex-col gap-2">
            Phone Number
            <input
              type="number"
              name="phone"
              className="border border-black rounded-lg outline-none px-3 py-2"
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="w-[200px] py-3 duration-300 bg-blue-500 font-semibold text-2xl text-white rounded-xl hover:bg-blue-600"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              createUser();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
