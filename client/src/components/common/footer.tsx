import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareEnvelope } from "react-icons/fa6";


const Footer : React.FC = () => {

    return <div className="w-screen h-70 bg-green-300">
        
        <div className="flex justify-between itme-center pt-5 pl-10">
             <div className="p-3 w-80 h-52  ">
                <div>
                    <img className="w-48" src="/src/assets/logo.png" alt="" />
                </div>

                <div className="font-judson text-2xl p-4">
                    Get paid to recycle !
                </div>

                <div className="flex justify-evenly items-center w-48 py-4">
                     <FaSquareXTwitter size={25}/> 
                     <FaSquareGithub size={25}/> 
                     <FaInstagramSquare size={25}/> 
                     <FaSquareEnvelope size={25}/> 
                </div>
             </div>
            
            <div className="flex justify-between itme-center"> 
             <div className="p-2 w-80 h-52 ">
                <div className="font-judson text-xl font-bold place-items-center">
                    Company
                </div>
                
                <div className="font-judson text-xl">
                    <ul>
                        <li>About</li>
                        <li>features</li>
                        <li>Works</li>
                        <li>Career</li>
                    </ul>
                </div>
             </div>
     
             <div className="p-2 w-80 h-52 ">
                <div className="font-judson text-xl font-bold place-items-center">
                    Help
                </div>

                <div className="font-judson text-xl">
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

        <div className="flex justify-center items-center py-3">
             © Copyright 2025, All Rights Reserved by SustainDev
        </div>

    </div>
}

export default Footer;