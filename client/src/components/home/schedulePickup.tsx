import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import ChooseWasteCard from "./chooseWasteCard";
import ScrollReveal from "../../context/animationContext";
import plastic from "../../assets/plastic.jpg";
import paper from "../../assets/paper.webp";
import metal from "../../assets/metal.jpg";
import glass from "../../assets/glass.jpg";
import eWaste from "../../assets/e-waste.jpg";
import textile from "../../assets/textile.jpg";
import api from "../../api";

interface WasteItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const SchedulePickup: React.FC = () => {
  const [wasteItems, setWasteItems] = useState<WasteItem[]>([
    { id: "plastic", name: "Plastic", price: 10, image: plastic, quantity: 0 },
    { id: "paper", name: "Paper", price: 8, image: paper, quantity: 0 },
    { id: "metal", name: "Metal Scrap", price: 25, image: metal, quantity: 0 },
    { id: "glass", name: "Glass", price: 20, image: glass, quantity: 0 },
    { id: "ewaste", name: "E-waste", price: 50, image: eWaste, quantity: 0 },
    {
      id: "textile",
      name: "Textile Waste",
      price: 20,
      image: textile,
      quantity: 0,
    },
  ]);

  const fetchWasteItems = async() => {
    try{
      const response = await api.post('/user/wallet',{wasteItems});
    }catch(e){
      console.error("Error fetching transactions:", e);
    }
  }

  const totalOrderValue = wasteItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = useCallback((name: string, quantity: number) => {
    setWasteItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name ? { ...item, quantity } : item
      )
    );
  }, []);

  const handleConfirmPickup = () => {
    if (totalOrderValue === 0) {
      alert("Please select at least one type of waste for pickup");
      return;
    }

    console.log(
      "Scheduling pickup for:",
      wasteItems.filter((item) => item.quantity > 0)
    );
    alert(`Pickup scheduled! Your estimated earnings: ₹${totalOrderValue}`);

    setWasteItems((prevItems) =>
      prevItems.map((item) => ({ ...item, quantity: 0 }))
    );
  };

  return (
    <section
      id="order"
      className="fixed inset-0 w-full justify-items-center bg-gradient-to-b from-green-gradient-2 to-green-gradient-1 p-5"
      aria-labelledby="waste-selection-heading"
    >
      <ScrollReveal
        animation="fadeIn"
        className="flex justify-center items-center font-judson font-bold text-xl s:text-2xl md:text-4xl mt-10"
      >
        <h2 id="waste-selection-heading">Recyclable Waste Collection</h2>
      </ScrollReveal>

      <ScrollReveal
        animation="fadeIn"
        className="flex justify-center text-center font-judson text-sm md:text-lg xs:w-110 md:w-150 mt-2 md:mt-5 text-neutral-700"
      >
        Select the types and quantities of recyclable waste you wish to have
        collected. Earn rewards for contributing to a cleaner environment.
      </ScrollReveal>

      <ScrollReveal
        animation="fadeIn"
        className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 justify-items-center gap-5 md:gap-10 xs:m-5 md:m-10 lg:m-15 xl-20"
      >
        {wasteItems.map((waste) => (
          <ChooseWasteCard
            key={waste.id}
            wasteName={waste.name}
            wastePrice={waste.price}
            img={waste.image}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </ScrollReveal>

      <motion.button
        className="flex justify-center items-center w-44 h-10 md:w-64 md:h-16 text-white font-judson font-bold text-xl md:text-2xl rounded-2xl bg-green-500 cursor-pointer shadow-md"
        whileHover={{ backgroundColor: "green" }}
        whileTap={{ scale: 0.9 }}
        onClick={handleConfirmPickup}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: { duration: 1, delay: 0.3, ease: "easeInOut" },
          scale: { duration: 0.1, ease: "easeOut" },
        }}
        aria-label="Confirm waste pickup order"
      >
        Schedule Pickup
      </motion.button>
    </section>
  );
};

export default SchedulePickup;
