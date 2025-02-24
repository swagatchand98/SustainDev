import { FcGoogle } from "react-icons/fc";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const SignupScreen: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-green-gradient-1 to bg-green-gradient-2">
      <div className="flex-col place-items-center w-130 h-120 p-5 rounded-2xl bg-green-100 shadow-2xl">
        {/* top of the signup comp */}
        <div className="relative flex justify-center items-center w-full">
          <div className="absolute top-0 left-0 col-span-1">
            <HiOutlineArrowLeft className="text-2xl" />
          </div>

          <div className="col-span-2 text-2xl font-judson font-bold tracking-widest">
            SignUp
          </div>

          <div className="col-span-3"></div>
        </div>

        <div className="h-[1px] bg-gray-500 w-full my-3"></div>

        {/* form part of the signup comp */}
        <div className="flex justify-center items-center py-10">
          <form className="flex-col space-y-5">
            <div>
              <input
                type="text"
                placeholder="your username"
                className="w-100 bg-white h-10 rounded-lg px-2 text-lg font-judson"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="your email"
                className="w-100 bg-white h-10 rounded-lg px-2 text-lg font-judson"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="password"
                className="w-100 bg-white h-10 rounded-lg px-2 text-lg font-judson"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="confirm password"
                className="w-100 bg-white h-10 rounded-lg px-2 text-lg font-judson"
              />
            </div>
          </form>
        </div>

        {/* sumbit part of the signup comp */}
        <div className="flex-col justify-items-start w-100">
            <div className="flex items-center gap-x-4">
                <div className="flex justify-center text-white items-center text-2xl font-judson w-25 h-10 rounded-lg bg-green-500">
                <Link to={"#"}>Submit</Link>
                </div>

                <FcGoogle className="text-4xl rounded-full bg-white p-1"/>
            </div>

          <div className="text-lg font-judson font-light pt-2">
            <Link to={"/Login"}>Already have an account ?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
