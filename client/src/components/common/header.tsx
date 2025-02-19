import { IoMdMenu } from "react-icons/io";
//import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import IsScrolledContext from "../../context/IsScrolledContext";
import { motion } from "motion/react";
import { useContext } from "react";

const Header: React.FC = () => {

  const { isScrolled } = useContext(IsScrolledContext);

  return (
    <div className="fixed min-w-screen h-12 md:h-15 xl:h-17 bg-transparent flex justify-center items-center pt-15 xs:pt-10 sm:pt-7 md:pt-10 xl:py-15 ">
      <motion.div
        className="flex justify-between items-center w-90 xs:w-120 md:w-200 xl:w-350 h-12 md:h-15 xl:h-17 bg-opacity-15 rounded-full px-5 md:px-10 xl:px-30 z-50"
        initial={{ backgroundColor: "#82EE7030" }}
        animate={{
          boxShadow: isScrolled
            ? "0 8px 12px -2px rgb(0 0 0 / 0.2), 0 4px 8px -4px rgb(0 0 0 / 0.2)"
            : "none",
          backdropFilter: isScrolled ? "blur(8px)" : "none",
          backgroundColor: isScrolled ? "#82EE7050" : "#82EE7030",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center cursor-pointer">
          <img
            className="w-30 md:w-40 xl:w-48"
            src="/src/assets/logo.png"
            alt="sustaindev"
          />
        </div>

        <div className="">
          <nav>
            <motion.ul className="hidden xl:flex justify-between items-center text-2xl font-judson font-extralight"
            whileHover={{ scale: 1.02}}
            >
              <motion.li className="px-5" whileHover={{scale:1.1}}>
                <Link to={"/"}>Home</Link>
              </motion.li>

              <motion.li className="px-5" whileHover={{scale:1.1}}>
                <Link to={"/services"}>Services</Link>
              </motion.li>

              <motion.li className="px-5" whileHover={{scale:1.1}}>
                <Link to={"/about-us"}>About-us</Link>
              </motion.li>

              <motion.li className="px-5" whileHover={{scale:1.1}}>
                <Link to={"/contacts"}>Contacts</Link>
              </motion.li>
            </motion.ul>
          </nav>
        </div>

        <motion.div className="hidden xl:flex justify-center w-40 h-8 rounded-full text-xl font-extralight items-center font-judson"
        initial={{border:'1px solid black'}}
        whileHover={{backgroundColor: '#1D820C', scale: 1.1, color: 'white', border: 'none'}}
        transition={{duration: 0.2}}
        >
          <Link to={"/login"}>Sign Up / Log in</Link>
        </motion.div>

        <div className="flex justify-center items-center xl:hidden">
          <IoMdMenu className="text-2xl md:text-3xl" />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
