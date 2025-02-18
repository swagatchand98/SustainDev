import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareEnvelope } from "react-icons/fa6";


const Footer : React.FC = () => {

    return <div className="w-screen h-55 md:h-70 bg-green-300">
        
        <div className="flex justify-between itme-center pt-2 md:pt-5 pl-2 md:pl-10">
             <div className="p-3 w-50 md:w-80 h-40 md:h-42 lg:h-52">
                <div>
                    <img className="w-30 md:w-35 lg:w-48" src="/src/assets/logo.png" alt="" />
                </div>

                <div className="font-judson text-lg md:text-xl lg:text-2xl p-2 lg:p-4">
                    Get paid to recycle !
                </div>

                <div className="flex justify-between px-2 md:px-0 md:justify-evenly items-center w-48 py-4">
                     <FaSquareXTwitter className="text-xl md:text-2xl"/> 
                     <FaSquareGithub className="text-xl md:text-2xl"/> 
                     <FaInstagramSquare className="text-xl md:text-2xl"/> 
                     <FaSquareEnvelope className="text-xl md:text-2xl"/> 
                </div>
             </div>
            
            <div className="flex justify-between item-center md:px-10 lg:px-0"> 
             <div className="pt-2 md:p-2 w-25 h-20 md:w-40 md:h-42 lg:w-80 lg:h-52 ">
                <div className="font-judson text-sm md:text-lg lg:text-xl font-bold place-items-center">
                    Company
                </div>
                
                <div className="font-judson text-sm md:text-lg lg:text-xl">
                    <ul>
                        <li>About</li>
                        <li>features</li>
                        <li>Works</li>
                        <li>Career</li>
                    </ul>
                </div>
             </div>
     
             <div className="pt-2 md:p-2 w-25 h-20 md:w-45 md:h-42 lg:w-80 lg:h-52  ">
                <div className="font-judson text-sm md:text-lg lg:text-xl font-bold place-items-center">
                    Help
                </div>

                <div className="font-judson text-sm md:text-lg lg:text-xl">
                    <ul>
                        <li>Customer Support</li>
                        <li>Pickup Details</li>
                        <li>Tersm & Conditions</li>
                        <li>Privacy Policy</li>
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