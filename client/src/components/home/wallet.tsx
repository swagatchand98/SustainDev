import { RxCross2 } from "react-icons/rx";
import { FcSalesPerformance } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Wallet : React.FC = () => {

    const navigate = useNavigate();

    return <div className="fixed inset-0 flex justify-center items-center w-full h-screen bg-transparent backdrop-blur-sm z-60">
        <div className="w-100 h-80 bg-[#BEFEB4] shadow-2xl z-50 rounded-2xl p-2 ">
            <div className="flex justify-between items-center px-3">
                <div className="text-2xl font-judson font-bold">
                    Wallet
                </div>
                <RxCross2 onClick={() => {navigate(-1)}} className="text-xl cursor-pointer"/>
            </div>

            <div className="h-[1px] w-full bg-black my-1"></div>

            <div className="flex justify-center items-center w-full h-25 text-4xl font-judson font-bold text-amber-700 gap-x-2">
                100 Coins <FcSalesPerformance/>
            </div>

            <div className="w-full h-35 p-2">
                <div className="font-judson w-fit h-fit">
                    History :
                </div>

                <div className="w-full h-full bg-white overflow-y-scroll p-2">
                    <div className="flex justify-between items-center w-full h-4 text-xs">
                        <div>
                            27/02/2025 : 19:34
                        </div>

                        <div>
                            10 coins
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Wallet