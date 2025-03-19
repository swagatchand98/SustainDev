import { useState, memo } from "react";
import { GoPlus, GoDash } from "react-icons/go";
import { motion } from "framer-motion";

interface ChooseWasteCardProps {
  wasteName: string;
  wastePrice: number;
  img: string;
  onQuantityChange?: (name: string, quantity: number) => void;
}

const ChooseWasteCard: React.FC<ChooseWasteCardProps> = memo(({
  wasteName,
  wastePrice,
  img,
  onQuantityChange
}) => {
  const [value, setValue] = useState(0);

  const increment = () => {
    const newValue = value + 1;
    setValue(newValue);
    onQuantityChange?.(wasteName, newValue);
  };

  const decrement = () => {
    if (value === 0) return;
    const newValue = value - 1;
    setValue(newValue);
    onQuantityChange?.(wasteName, newValue);
  };

  return (
    <motion.div
      className="w-35 h-40 md:w-100 md:h-60 items-center border border-gray-300 rounded-2xl overflow-hidden shadow-md bg-white bg-opacity-90"
      animate={{ boxShadow: "10px 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
      whileHover={{ scale: 1.01, boxShadow: "10px 10px 25px -5px rgba(0, 0, 0, 0.5)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >

      <div className="overflow-hidden">
        <img 
          className="w-full h-14 md:h-30 object-cover" 
          src={img} 
          alt={`${wasteName} waste`} 
          loading="lazy"
        />
      </div>

      <div className="flex items-center justify-between text-center font-judson md:text-2xl pt-2 md:py-4 px-5 font-semibold">
        <h3>{wasteName}</h3> <h3>₹{wastePrice}</h3>
      </div>

      <div className="flex justify-between items-center px-5 md:px-15 bg-green-100 mx-2 md:mx-5 rounded-full" aria-label={`Quantity control for ${wasteName}`}>
        <button 
          onClick={decrement} 
          className="select-none cursor-pointer flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          disabled={value === 0}
          aria-label="Decrease quantity"
        >
          <GoDash className="text-xl md:text-3xl" strokeWidth={0.25} />
        </button>

        <div className="relative">
          <input
            className="w-10 h-10 md:w-20 md:h-10 text-lg md:text-2xl rounded-xl bg-transparent border-gray-300 border-0 outline-none px-1 md:px-5 cursor-not-allowed text-center placeholder:text-sm md:placeholder:text-lg [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            readOnly
            min={0}
            value={value}
            type="number"
            aria-label={`${wasteName} quantity in kg`}
          />
          <span className="sr-only">
            {value} kg of {wasteName} selected at ₹{wastePrice} per kg
          </span>
        </div>

        <button 
          onClick={increment} 
          className="select-none cursor-pointer flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Increase quantity"
        >
          <GoPlus className="text-xl md:text-3xl" strokeWidth={0.25} />
        </button>
      </div>
    </motion.div>
  );
});

ChooseWasteCard.displayName = "ChooseWasteCard";

export default ChooseWasteCard;