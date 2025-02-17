import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";

const Hero: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-gradient-to-t from-green-gradient-2 to bg-green-gradient-1">
      <div className="justify-items-center grid grid-cols-1">
        <div className="flex justify-center items-center font-crimson text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-[0.2] md:tracking-[0.25em] pt-20 xs:pt-10 lg:pt-25 xl:pt-50">
          MAKE OUR ENVIRONMENT
        </div>

        <div className="flex justify-center lg:justify-between items-center w-screen px-10">
          <div className="hidden lg:block">
            <BsArrowLeftCircle className="lg:text-5xl xl:text-7xl" color="black" opacity={0.5} />
          </div>

          <div className="flex justify-center items-center xs:w-120 md:w-180 lg:w-220 xl:w-240">
            <img src="/src/assets/green.png" alt="GREEN" />
          </div>

          <div className="hidden lg:block">
            <BsArrowRightCircle className="lg:text-5xl xl:text-7xl" color="black" opacity={0.5} />
          </div>
        </div>

        <div className="flex justify-center w-95 md:w-150 lg:w-200 xl:w-290 xl:h-42 text-lg font-judson items-center text-center mb-25 mt-15 xs:mb-10 xs:mt-10 md:mb-15 xl:mb-15 xl:mt-10">
          Get Paid To Recycle ! Want to make a difference and get rewarded for
          it? Join the recycling revolution! By recycling, you're not only
          helping to save the planet, but you can also earn money! we pay
          individuals for collecting and depositing recyclable materials like
          plastic, paper, glass, metal scraps and electronic scraps. Plus, by
          reducing waste, you'll be contributing to a cleaner, greener
          community.So, start collecting, recycling, and cashing in - your
          wallet and the Earth will thank you!
        </div>

        <div className="flex justify-center items-center w-60 h-10 md:w-80 md:h-12 xl:w-105 xl:h-19 text-lg md:text-2xl xl:text-3xl text-white bg-green-500 rounded-3xl font-judson font-bold ">
          Start Recycling & Earning
        </div>
      </div>
    </div>
  );
};

export default Hero;
