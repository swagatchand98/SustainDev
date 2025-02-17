import { IoMdMenu } from "react-icons/io";
//import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="fixed min-w-screen h-12 md:h-15 xl:h-17 bg-transparent flex justify-center items-center pt-15 xs:pt-10 sm:pt-7 md:pt-10 xl:py-15">
      <div className="flex justify-between items-center w-90 xs:w-120 md:w-200 xl:w-350 h-12 md:h-15 xl:h-17 bg-green-100 bg-opacity-15 rounded-full px-5 md:px-10 xl:px-30">
        <div className="flex items-center">
          <img className="w-30 md:w-40 xl:w-48" src="/src/assets/logo.png" alt="sustaindev" />
        </div>

        <div className="">
          <nav>
            <ul className="hidden xl:flex justify-between items-center text-2xl font-judson font-extralight">
              <li className="px-5">
                <Link to={"/"}>Home</Link>
              </li>

              <li className="px-5">
                <Link to={"/services"}>Services</Link>
              </li>

              <li className="px-5">
                <Link to={"/about-us"}>About-us</Link>
              </li>

              <li className="px-5">
                <Link to={"/contacts"}>Contacts</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden xl:flex justify-center w-40 h-8 rounded-full text-xl font-extralight items-center border-1 border-black font-judson">
          <Link to={"/login"}>Sign Up / Log in</Link>
        </div>

        <div className="flex justify-center items-center xl:hidden">
          <IoMdMenu className="text-2xl md:text-3xl"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
