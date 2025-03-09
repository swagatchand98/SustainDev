import { useContext, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { HeroImageContext } from "../../context/heroImageContext";
import ScrollReveal from "../../context/animationContext";
import green from "../../assets/green.png";
import clean from "../../assets/clean.png";
import sustainable from "../../assets/sustainable.png";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const { heroImageIndex, prevIndex, nextHandler, prevHandler, setIsHovered } =
    useContext(HeroImageContext);

  const getDirection = useCallback(() => {
    if (heroImageIndex === 0 && prevIndex === 2) return 1;
    if (heroImageIndex === 2 && prevIndex === 0) return -1;
    return heroImageIndex > prevIndex ? 1 : -1;
  }, [heroImageIndex, prevIndex]);

  const direction = getDirection();

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

  const slideTransition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 }
  };

  const heroImages = [
    { key: "green", src: green, alt: "GREEN" },
    { key: "clean", src: clean, alt: "CLEAN" },
    { key: "sustainable", src: sustainable, alt: "SUSTAINABLE" }
  ];

  const currentImage = heroImages[heroImageIndex];

  return (
    <section 
      id="hero" 
      className="flex justify-center items-center min-h-screen w-full bg-gradient-to-t from-green-gradient-2 to-green-gradient-1"
      aria-label="Hero section"
    >
      <div className="w-full justify-items-center grid grid-cols-1">
        <ScrollReveal 
          animation="fadeIn" 
          className="flex justify-center items-center font-crimson text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wider md:tracking-widest pt-25 xs:pt-10 lg:pt-25 xl:pt-50"
        >
          MAKE OUR ENVIRONMENT
        </ScrollReveal>

        <motion.div 
          className="flex justify-center lg:justify-between items-center w-full xs:px-10"
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          tabIndex={-1}
        >
          <button 
            onClick={prevHandler} 
            className="hidden lg:block cursor-pointer select-none"
            aria-label="Previous slide"
          >
            <BsArrowLeftCircle
              className="lg:text-5xl xl:text-7xl transition-transform hover:scale-110"
              color="black"
              opacity={0.5}
            />
          </button>
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div 
              key={currentImage.key} 
              className="flex justify-center items-center w-fit h-30 xs:h-35 sm:h-40 md:h-50 lg:h-60 xl:h-70"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
            >
              <div className="xs:w-120 md:w-180 lg:w-220 xl:w-240">
                <img 
                  src={currentImage.src} 
                  alt={currentImage.alt} 
                  className="max-w-full h-auto"
                  loading="eager"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={nextHandler} 
            className="hidden lg:block cursor-pointer select-none"
            aria-label="Next slide"
          >
            <BsArrowRightCircle
              className="lg:text-5xl xl:text-7xl transition-transform hover:scale-110"
              color="black"
              opacity={0.5}
            />
          </button>
        </motion.div>

        <ScrollReveal 
          className="flex justify-center w-80 s:w-90 md:w-150 lg:w-200 xl:w-290 xl:h-42 text-sm s:text-lg font-judson items-center text-center mb-10 s:mb-20 mt-2 xs:mb-10 xs:mt-10 md:mb-15 xl:mb-15 xl:mt-10"
        >
          Get Paid To Recycle! Want to make a difference and get rewarded for
          it? Join the recycling revolution! By recycling, you're not only
          helping to save the planet, but you can also earn money! We pay
          individuals for collecting and depositing recyclable materials like
          plastic, paper, glass, metal scraps and electronic scraps. Plus, by
          reducing waste, you'll be contributing to a cleaner, greener
          community. So, start collecting, recycling, and cashing in - your
          wallet and the Earth will thank you!
        </ScrollReveal>

        <Link to="/signup">
          <motion.button
            className="flex justify-center items-center w-60 h-10 md:w-80 md:h-12 xl:w-105 xl:h-19 text-lg md:text-2xl xl:text-3xl text-white bg-green-500 rounded-3xl font-judson font-bold cursor-pointer mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{
              backgroundColor: "#1D820C",
              scale: 1.05,
              color: "white",
            }}
            transition={{
              opacity: { duration: 1, ease: "easeInOut", delay: 0.3 }, 
              scale: { duration: 0.2, ease: "easeOut" },
            }}
            aria-label="Start recycling and earning"
          >
            Start Recycling & Earning
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;