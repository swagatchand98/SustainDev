import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";

const Hero: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-t from-green-gradient-2 to bg-green-gradient-1">
      <div className="justify-items-center grid grid-cols-1 gap-y-">
        <div className="flex justify-center items-center font-crimson text-4xl tracking-[0.25em] pt-50">
          MAKE OUR ENVIRONMENT
        </div>

        <div className="flex justify-between items-center w-screen px-10">
          <div className="">
            <BsArrowLeftCircle size={75} color="black" opacity={0.5} />
          </div>

          <div className="flex justify-center items-center w-240">
            <img src="/src/assets/green.png" alt="GREEN" />
          </div>

          <div>
            <BsArrowRightCircle size={75} color="black" opacity={0.5} />
          </div>
        </div>

        <div className="flex justify-center w-290 h-42 text-2xl font-judson items-center text-center mb-15 mt-10">
          Get Paid To Recycle ! Want to make a difference and get rewarded for
          it? Join the recycling revolution! By recycling, you're not only
          helping to save the planet, but you can also earn money! we pay
          individuals for collecting and depositing recyclable materials like
          plastic, paper, glass, metal scraps and electronic scraps. Plus, by
          reducing waste, you'll be contributing to a cleaner, greener
          community.So, start collecting, recycling, and cashing in - your
          wallet and the Earth will thank you!
        </div>

        <div className="flex justify-center items-center w-105 h-19 text-3xl text-white bg-green-500 rounded-3xl font-judson font-bold ">
          Start Recycling & Earning
        </div>
      </div>
    </div>
  );
};

export default Hero;
