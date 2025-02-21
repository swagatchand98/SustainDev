import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import { motion, AnimatePresence } from "motion/react";
import { HeroImageContext } from "../../context/heroImageContext";
import { useContext } from "react";
import ScrollReveal from "../../context/animationContext";
import green from "../../assets/green.png"
import clean from "../../assets/clean.png"
import sustainable from "../../assets/sustainable.png"

const Hero: React.FC = () => {
  const { heroImageIndex, prevIndex, nextHandler, prevHandler, setIsHovered } =
    useContext(HeroImageContext);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const direction = heroImageIndex === 0 && prevIndex === 2 ? 1 : 
                   heroImageIndex === 2 && prevIndex === 0 ? -1 : 
                   heroImageIndex > prevIndex ? 1 : -1;

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-gradient-to-t from-green-gradient-2 to bg-green-gradient-1">
      <div className="justify-items-center grid grid-cols-1">
        <ScrollReveal animation="fadeIn" className="flex justify-center items-center font-crimson text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-[0.2] md:tracking-[0.25em] pt-25 xs:pt-10 lg:pt-25 xl:pt-50">
          MAKE OUR ENVIRONMENT
        </ScrollReveal>

        <motion.div className="flex justify-center lg:justify-between items-center w-screen xs:px-10"
         onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{duration: 1}}
         >
          <div onClick={prevHandler} className="hidden lg:block cursor-pointer">
            <BsArrowLeftCircle
              className="lg:text-5xl xl:text-7xl"
              color="black"
              opacity={0.5}
            />
          </div>
          <AnimatePresence initial={false} custom={direction} mode="wait">
          {heroImageIndex === 0 && (
            <motion.div key="green" 
            className="flex justify-center items-center w-fit h-30 xs:h-35 sm:h-40 md:h-50 lg:h-60 xl:h-70"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type : "spring", stiffness: 300, damping: 30},
              opacity: { duration: 0.2}
            }}
            >
              <div className="xs:w-120 md:w-180 lg:w-220 xl:w-240">
                <img src={green} alt="GREEN" />
              </div>
            </motion.div>
          )}

          {heroImageIndex === 1 && (
            <motion.div key="clean" 
            className="flex justify-center items-center w-fit h-30 xs:h-35 sm:h-40 md:h-50 lg:h-60 xl:h-70"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type : "spring", stiffness: 300, damping: 30},
              opacity: { duration: 0.2}
            }}
            >
              <div className="xs:w-120 md:w-180 lg:w-220 xl:w-240">
                <img src={clean} alt="GREEN" />
              </div>
            </motion.div>
          )}

          {heroImageIndex === 2 && (
            <motion.div key="sustainable" 
            className="flex justify-center items-center w-fit h-30 xs:h-35 sm:h-40 md:h-50 lg:h-60 xl:h-70"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type : "spring", stiffness: 300, damping: 30},
              opacity: { duration: 0.2}
            }}
            >
              <div className="xs:w-120 md:w-180 lg:w-220 xl:w-240">
                <img src={sustainable}   alt="GREEN" />
              </div>
            </motion.div>
          )}
          </AnimatePresence>

          <div onClick={nextHandler} className="hidden lg:block cursor-pointer">
            <BsArrowRightCircle
              className="lg:text-5xl xl:text-7xl"
              color="black"
              opacity={0.5}
            />
          </div>
        </motion.div>

        <ScrollReveal className="flex justify-center w-95 md:w-150 lg:w-200 xl:w-290 xl:h-42 text-lg font-judson items-center text-center mb-20 mt-2 xs:mb-10 xs:mt-10 md:mb-15 xl:mb-15 xl:mt-10">
          Get Paid To Recycle ! Want to make a difference and get rewarded for
          it? Join the recycling revolution! By recycling, you're not only
          helping to save the planet, but you can also earn money! we pay
          individuals for collecting and depositing recyclable materials like
          plastic, paper, glass, metal scraps and electronic scraps. Plus, by
          reducing waste, you'll be contributing to a cleaner, greener
          community.So, start collecting, recycling, and cashing in - your
          wallet and the Earth will thank you!
        </ScrollReveal>

        <motion.div
          className="flex justify-center items-center w-60 h-10 md:w-80 md:h-12 xl:w-105 xl:h-19 text-lg md:text-2xl xl:text-3xl text-white bg-green-500 rounded-3xl font-judson font-bold cursor-pointer"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          whileHover={{
            backgroundColor: "#1D820C",
            scale: 1.05,
            color: "white",
            border: "none",
          }}
          transition={{
            opacity: { duration: 1, ease: "easeInOut" }, 
            scale: { duration: 0.2, ease: "easeOut" },
          }}
        >
          Start Recycling & Earning
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
