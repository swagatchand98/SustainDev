import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import IsScrolledContext from "../../context/IsScrolledContext";
import { NavBarContext } from "../../context/navBarContext";
import { motion } from "motion/react";
import { useContext } from "react";
import logo from '../../assets/logo.png'
import { useAuth } from "../../context/authContext";

const Header: React.FC = () => {
  const { isScrolled } = useContext(IsScrolledContext);
  const { isNavBarOpen, toggleNavBar } = useContext(NavBarContext);

  const { isAuthenticated, isLoading, user } = useAuth(); 

  if(isAuthenticated){
    console.log(user);
  }

  const navItems = [
    {to:"/", title:"Home"},
    {to:"services", title:"Services"},
    {to:"about-us", title:"About-us"},
    {to:"/contacts", title:"contacts"}
  ]

  return (
    <motion.div
      className={`transform transition-transform duration-1000 ease-in-out ${
        isNavBarOpen
          ? "fixed w-full h-60 md:h-60 xl:h-60 bg-transparent flex justify-center items-center pt-15 xs:pt-10 sm:pt-7 md:pt-10 xl:py-15"
          : "fixed w-full h-12 md:h-15 xl:h-17 bg-transparent flex justify-center items-center pt-15 xs:pt-10 sm:pt-7 md:pt-10 xl:py-15"
      }`}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1, delay: 0.3}}
    >
      <motion.div
        className={`transform transition-transform duration-1000 ease-in-out ${
          isNavBarOpen
            ? "items-start rounded-4xl w-80 s:w-90 xs:w-120 md:w-200 xl:w-350 h-60 md:h-60 xl:h-60 bg-opacity-50 pt-3 px-5 md:px-10 xl:px-30 z-50"
            : "flex justify-between items-center rounded-full w-80 s:w-90 xs:w-120 md:w-200 xl:w-350 h-12 md:h-15 xl:h-17 bg-opacity-15 px-5 md:px-10 xl:px-30 z-50"
        }`}
        initial={{ backgroundColor: "#82EE7030" }}
        animate={{
          boxShadow:
            isScrolled || isNavBarOpen
              ? "0 8px 12px -2px rgb(0 0 0 / 0.2), 0 4px 8px -4px rgb(0 0 0 / 0.2)"
              : "none",
          backdropFilter: isScrolled || isNavBarOpen ? "blur(8px)" : "none",
          backgroundColor:
            isScrolled || isNavBarOpen ? "#82EE7050" : "#82EE7030",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center cursor-pointer">
          <img
            className="w-30 md:w-40 xl:w-48"
            src={logo}
            alt="sustaindev"
          />
        </div>

        <div className="">
          <nav>
            <motion.ul
              className={`${
                isNavBarOpen
                  ? "items-center text-lg lg:text-xl xl:text-2xl pt-5 font-judson font-extralight tracking-wide"
                  : "hidden xl:flex justify-between items-center text-2xl font-judson font-extralight tracking-wide"
              }`}
            >
              {navItems.map((item) => (
                <motion.li className="group px-5">
                  <Link to={item.to}>{item.title}</Link>
                  <div className="h-[1px] bg-black w-0 group-hover:w-full transition-all duration-300"></div>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>

        {isAuthenticated ? (
          <motion.div
          className={`${
            isNavBarOpen
              ? "flex justify-center w-30 h-7 md:w-40 xl:h-8 m-3 rounded-full text-sm md:text-lg xl:text-xl font-extralight items-center font-judson"
              : "hidden xl:flex justify-center w-40 h-8 rounded-full text-xl font-extralight items-center font-judson"
          }`}
          initial={{ border: "1px solid black" }}
          whileHover={{
            backgroundColor: "#1D820C",
            color: "white",
            border: "none",
          }}
          transition={{ duration: 0.2 }}
        >
          <Link to={"/signup"}>{`hi ${user.username}`}</Link>
        </motion.div>
        ) : (
                  <motion.div
                  className={`${
                    isNavBarOpen
                      ? "flex justify-center w-30 h-7 md:w-40 xl:h-8 m-3 rounded-full text-sm md:text-lg xl:text-xl font-extralight items-center font-judson"
                      : "hidden xl:flex justify-center w-40 h-8 rounded-full text-xl font-extralight items-center font-judson"
                  }`}
                  initial={{ border: "1px solid black" }}
                  whileHover={{
                    backgroundColor: "#1D820C",
                    color: "white",
                    border: "none",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={"/signup"}>Sign Up / Log in</Link>
                </motion.div>
        )}

        <div
          onClick={toggleNavBar}
          className={`${
            isNavBarOpen
              ? "flex justify-end items-center relative -top-52 xl:hidden"
              : "flex justify-center items-center xl:hidden"
          }`}
        >
          {isNavBarOpen ? (
            <RxCross2 className="text-2xl md:text-3xl" />
          ) : (
            <IoMdMenu className="text-2xl md:text-3xl" />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
