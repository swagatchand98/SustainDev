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
    <div className="w-36 h-42 md:w-72 md:h-56 items-center border-1 rounded-2xl overflow-hidden">
      <div className="font-judson text-lg text-center md:text-2xl flex justify-center items-center pt-2 md:py-4 px-3">
        {`${wasteName} per kg. ₹${wastePrice}`}
      </div>

      <div className="flex justify-between items-center py-2 px-5 md:px-15">
        <div>
          <GoDash className="text-xl md:text-3xl" strokeWidth={0.25} />
        </div>

        <div className="">
          <input
            readOnly
            placeholder="in kg"
            className="w-10 h-10 md:w-20 md:h-10 text-lg md:text-2xl rounded-xl border-none bg-white outline-black outline-1 px-1 md:px-5 cursor-not-allowed place-items-center placeholder:text-sm md:placeholder:text-lg [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            type="number"
          />
        </div>

        <div>
          <GoPlus className="text-xl md:text-3xl" strokeWidth={0.25} />
        </div>
      </div>

      <div className="">
        <img className="w-144 h-14 md:w-288 md:h-28" src={img} alt="waste" />
      </div>
    </div>
  );
};

export default ChooseWasteCard;
