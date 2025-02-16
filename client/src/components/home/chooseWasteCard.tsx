import { GoPlus } from "react-icons/go";
import { GoDash } from "react-icons/go";


interface ChooseWasteCardProps {

    wasteName : string;
    wastePrice : Number;
    img: string;
}

const ChooseWasteCard : React.FC<ChooseWasteCardProps> = ({wasteName, wastePrice, img}) => {

    return <div className="w-72 h-56 items-center border-2 rounded-2xl overflow-hidden">
        <div className="font-judson text-2xl font-bold flex justify-center items-center py-4 px-2">
            {`${wasteName} per kg. ₹${wastePrice}`}
        </div>

        <div className="flex justify-between items-center py-2 px-10">
            <div>
                <GoDash size={30} strokeWidth={0.5}/>
            </div>

            <div className="">
                <input readOnly className="w-20 h-10 text-2xl rounded-2xl border-none bg-gray-300 outline-none px-5 cursor-not-allowed [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" type="number" />
            </div>

            <div>
                <GoPlus size={30} strokeWidth={0.5}/>
            </div>
            
        </div>

        <div className="">
            <img className="w-288 h-28" src={img} alt="waste" />
        </div>
    </div>
}

export default ChooseWasteCard;