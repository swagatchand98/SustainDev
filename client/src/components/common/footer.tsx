import { motion } from "motion/react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareEnvelope } from "react-icons/fa6";


const Footer : React.FC = () => {

    return <div className="w-screen h-55 md:h-70 bg-green-300">
        
        <div className="flex justify-between itme-center pt-2 md:pt-5 pl-2 md:pl-10">
             <div className="p-3 w-50 md:w-80 h-40 md:h-42 lg:h-52">
                <div className="cursor-pointer">
                    <img className="w-30 md:w-35 lg:w-48" src="/src/assets/logo.png" alt="" />
                </div>

                <div className="font-judson text-lg md:text-xl lg:text-2xl p-2 lg:p-4">
                    Get paid to recycle !
                </div>

                <div className="flex justify-between px-2 md:px-0 md:justify-evenly items-center w-48 py-4">
                     <FaSquareXTwitter className="text-xl md:text-2xl cursor-pointer hover:scale-120"/> 
                     <FaSquareGithub className="text-xl md:text-2xl cursor-pointer hover:scale-120"/> 
                     <FaInstagramSquare className="text-xl md:text-2xl cursor-pointer hover:scale-120"/> 
                     <FaSquareEnvelope className="text-xl md:text-2xl cursor-pointer hover:scale-120"/> 
                </div>
             </div>
            
            <div className="flex justify-between item-center md:px-10 lg:px-0"> 
             <div className="pt-2 md:p-2 w-25 h-20 md:w-40 md:h-42 lg:w-80 lg:h-52 ">
                <div className="font-judson text-sm md:text-lg lg:text-xl font-bold place-items-center">
                    Company
                </div>
                
                <div className="font-judson text-sm md:text-lg lg:text-xl">
                    <ul>
                        <motion.li className="cursor-pointer" whileHover={{scale:1.1}}>About</motion.li>
                        <motion.li className="cursor-pointer" whileHover={{scale:1.1}}>features</motion.li>
                        <motion.li className="cursor-pointer" whileHover={{scale:1.1}}>Works</motion.li>
                        <motion.li className="cursor-pointer" whileHover={{scale:1.1}}>Career</motion.li>
                    </ul>
                </div>
             </div>
     
             <div className="pt-2 md:p-2 w-25 h-20 md:w-45 md:h-42 lg:w-80 lg:h-52  ">
                <div className="font-judson text-sm md:text-lg lg:text-xl font-bold place-items-center">
                    Help
                </div>

                <div className="font-judson text-sm md:text-lg lg:text-xl">
                    <ul>
                        <motion.li className="cursor-pointer" whileHover={{scale:1.1}}>Customer Support</motion.li>
                        <motion.li className="cursor-pointer" whileHover={{scale:1.1}}>Pickup Details</motion.li>
                        <motion.li className="cursor-pointer" whileHover={{scale:1.1}}>Tersm & Conditions</motion.li>
                        <motion.li className="cursor-pointer" whileHover={{scale:1.1}}>Privacy Policy</motion.li>
                    </ul>
                </div>
             </div>
            </div> 

        </div>

        <div className="w-screen flex justify-center items-center">
            <div className=" h-0.5 w-400 bg-gray-400 ">
            </div>
        </div>

        <div className="flex justify-center items-center text-sm py-3">
             © Copyright 2025, All Rights Reserved by SustainDev
        </div>

    </div>
}

export default Footer;