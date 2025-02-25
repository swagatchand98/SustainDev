import { HiOutlineArrowLeft } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const [eyeOpen, setEyeOpen] = useState(false);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-green-gradient-1 to bg-green-gradient-2">
      <div className="flex-col place-items-center w-85 s:w-100 xs:w-130 h-120 p-5 rounded-2xl bg-green-100 shadow-2xl">
        {/* top of the signup comp */}
        <div className="relative flex justify-center items-center w-full cursor-pointer">
          <div
            onClick={() => navigate(-1)}
            className="absolute top-0 left-0 flex col-span-1"
          >
            <HiOutlineArrowLeft className="text-2xl" />
          </div>

          <div className="text-2xl font-judson font-bold tracking-widest">
            Login
          </div>
        </div>

        <div className="h-[1px] bg-gray-500 w-full my-3"></div>

        {/* form part of the signup comp */}
        <div className="flex justify-center items-center py-22">
          <form className="flex-col space-y-5">
            <div>
              <input
                type="email"
                placeholder="your email"
                className="w-75 s:w-90 xs:w-100 bg-white h-10 rounded-lg px-2 text-lg font-judson"
              />
            </div>

            <div className="relative">
              <input
                type={eyeOpen ? "text" : "password"}
                placeholder="password"
                className="w-75 s:w-90 xs:w-100 bg-white h-10 rounded-lg px-2 text-lg font-judson pr-10"
              />
              {eyeOpen ? (
                <FaEye
                  onClick={() => setEyeOpen(!eyeOpen)}
                  color="gray"
                  className="absolute top-0 right-0 m-3 select-none cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setEyeOpen(!eyeOpen)}
                  color="gray"
                  className="absolute top-0 right-0 m-3 select-none cursor-pointer"
                />
              )}
            </div>
          </form>
        </div>

        {/* sumbit part of the signup comp */}
        <div className="flex-col justify-items-start w-75 s:w-90 xs:w-100">
          <div className="flex items-center gap-x-4">
            <div className="flex justify-center text-white items-center text-2xl font-judson w-25 h-10 rounded-lg bg-green-500">
              <Link to={"#"}>Submit</Link>
            </div>

            <FcGoogle className="text-4xl rounded-full bg-white p-1" />
          </div>

          <div className="text-lg font-judson font-light pt-2">
            <Link to={"/signup"}>Don't have an account ?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
