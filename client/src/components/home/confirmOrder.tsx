import ChooseWasteCard from "./chooseWasteCard";

const ConfirmOrder: React.FC = () => {
  return (
    <div className="h-screen w-screen justify-items-center py-20 xs:py-0 bg-gradient-to-b from-green-gradient-2 to bg-green-gradient-1">
      <div className="flex justify-center items-center font-judson font-bold text-2xl md:text-4xl md:pt-35 lg:pt-35 xl:pt-40 md:p-5">
        Choose Your Recyclable Waste Quantity
      </div>

      <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 justify-items-center gap-7 xs:gap-10 md:gap-15 lg:gap-20 xs:m-5 md:m-10 my-15 md:mt-5 md:mb-5 lg:mb-10 xl:mb-15 xs:pb-5 md:pb-5 lg:pb-5 xl:pb-10">
        <ChooseWasteCard
          wasteName="Plastic"
          wastePrice={10}
          img="/src/assets/plastic.jpg"
        />
        <ChooseWasteCard
          wasteName="Paper"
          wastePrice={8}
          img="/src/assets/paper.webp"
        />
        <ChooseWasteCard
          wasteName="Metal Scrap"
          wastePrice={25}
          img="/src/assets/metal.jpg"
        />
        <ChooseWasteCard
          wasteName="Glass"
          wastePrice={20}
          img="/src/assets/glass.jpg"
        />
        <ChooseWasteCard
          wasteName="E-waste"
          wastePrice={50}
          img="/src/assets/e-waste.jpg"
        />
        <ChooseWasteCard
          wasteName="Textile Waste"
          wastePrice={20}
          img="/src/assets/textile.jpg"
        />
      </div>

      <div className="flex justify-center items-center w-44 h-10 md:w-64 md:h-16 xs:m-10 text-white font-judson text-bold text-xl md:text-3xl rounded-2xl bg-green-500">
        Confirm Pickup
      </div>
    </div>
  );
};

export default ConfirmOrder;
