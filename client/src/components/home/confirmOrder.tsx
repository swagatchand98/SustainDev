import ChooseWasteCard from "./chooseWasteCard";

const ConfirmOrder: React.FC = () => {
  return (
    <div className="h-screen w-screen justify-items-center bg-gradient-to-b from-green-gradient-2 to bg-green-gradient-1">
      <div className="flex justify-center items-center font-judson font-bold text-4xl pt-40 p-5">
        Choose Your Recyclable Waste Quantity
      </div>

      <div className="grid grid-cols-3 grid-rows-2 justify-items-center gap-20 m-10 mb-15 pb-10-">
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

      <div className="flex justify-center items-center w-64 h-16 m-10 text-white font-judson text-bold text-3xl rounded-2xl bg-green-500">
        Confirm Pickup
      </div>
    </div>
  );
};

export default ConfirmOrder;
