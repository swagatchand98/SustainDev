import { motion } from "motion/react";
import ChooseWasteCard from "./chooseWasteCard";
import ScrollReveal from "../../context/animationContext";
import plastic from "../../assets/plastic.jpg"
import paper from "../../assets/paper.webp"
import metal from "../../assets/metal.jpg"
import glass from "../../assets/glass.jpg"
import eWaste from "../../assets/e-waste.jpg"
import texttile from "../../assets/textile.jpg"

const ConfirmOrder: React.FC = () => {
  return (
    <div className="h-screen w-full justify-items-center bg-gradient-to-b from-green-gradient-2 to bg-green-gradient-1">
      <ScrollReveal animation="fadeIn" className="flex justify-center items-center font-judson font-bold text-xl s:text-2xl md:text-4xl md:pt-35 lg:pt-35 xl:pt-40 md:p-5">
        Choose Your Recyclable Waste Quantity
      </ScrollReveal>

      <ScrollReveal animation="fadeIn" className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 justify-items-center gap-7 xs:gap-10 md:gap-15 lg:gap-20 xs:m-5 md:m-10 my-15 md:mt-5 md:mb-5 lg:mb-10 xl:mb-15 xs:pb-5 md:pb-5 lg:pb-5 xl:pb-10">
        <ChooseWasteCard
          wasteName="Plastic"
          wastePrice={10}
          img={plastic}
        />
        <ChooseWasteCard
          wasteName="Paper"
          wastePrice={8}
          img={paper}
        />
        <ChooseWasteCard
          wasteName="Metal Scrap"
          wastePrice={25}
          img={metal}
        />
        <ChooseWasteCard
          wasteName="Glass"
          wastePrice={20}
          img={glass}
        />
        <ChooseWasteCard
          wasteName="E-waste"
          wastePrice={50}
          img={eWaste}
        />
        <ChooseWasteCard
          wasteName="Textile Waste"
          wastePrice={20}
          img={texttile}
        />
      </ScrollReveal>

      <motion.div
        className="flex justify-center items-center w-44 h-10 md:w-64 md:h-16 xs:m-10 text-white font-judson text-bold text-xl md:text-3xl rounded-2xl bg-green-500 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          opacity: { duration: 1, delay: 0.3, ease: "easeInOut" },
          scale: { duration: 0.2, ease: "easeOut" }
        }}
      >
        Confirm Pickup
      </motion.div>
    </div>
  );
};

export default ConfirmOrder;
