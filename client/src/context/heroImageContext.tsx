import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

interface heroImageContextType {
  heroImageIndex: number;
  prevIndex: number;
  nextHandler: () => void;
  prevHandler: () => void;
  setIsHovered: Dispatch<SetStateAction<boolean>>
}

export const HeroImageContext = createContext<heroImageContextType>({
  heroImageIndex: 0,
  prevIndex: 0,
  prevHandler: () => {},
  nextHandler: () => {},
  setIsHovered: () => {}
});

export const HeroImageContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {

    if(isHovered) return;

    const interval = setInterval(() => {
      setPrevIndex(heroImageIndex);
      setHeroImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 10000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const nextHandler: () => void = () => {
    setPrevIndex(heroImageIndex);
    setHeroImageIndex((x) => (x + 1) % 3);
  };

  const prevHandler: () => void = () => {
    setPrevIndex(heroImageIndex);
    heroImageIndex === 0
      ? setHeroImageIndex(2)
      : setHeroImageIndex(1);
  };

  return (
    <HeroImageContext.Provider
      value={{ heroImageIndex, prevIndex, nextHandler, prevHandler, setIsHovered }}
    >
      {children}
    </HeroImageContext.Provider>
  );
};

export default HeroImageContextProvider;
