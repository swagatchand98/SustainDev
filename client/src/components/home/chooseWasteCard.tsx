import { GoPlus } from "react-icons/go";
import { GoDash } from "react-icons/go";

interface ChooseWasteCardProps {
  wasteName: string;
  wastePrice: Number;
  img: string;
}

const ChooseWasteCard: React.FC<ChooseWasteCardProps> = ({
  wasteName,
  wastePrice,
  img,
}) => {
  return (
    <div className="w-72 h-56 items-center border-1 rounded-2xl overflow-hidden">
      <div className="font-judson text-2xl flex justify-center items-center py-4 px-2">
        {`${wasteName} per kg. ₹${wastePrice}`}
      </div>

      <div className="flex justify-between items-center py-2 px-15">
        <div>
          <GoDash size={30} strokeWidth={0.25} />
        </div>

        <div className="">
          <input
            readOnly
            placeholder="in kg"
            className="w-20 h-10 text-2xl rounded-2xl border-none bg-white outline-black outline-1 px-5 cursor-not-allowed place-items-center placeholder:text-lg [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            type="number"
          />
        </div>

        <div>
          <GoPlus size={30} strokeWidth={0.25} />
        </div>
      </div>

      <div className="">
        <img className="w-288 h-28" src={img} alt="waste" />
      </div>
    </div>
  );
};

export default ChooseWasteCard;
