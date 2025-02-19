import { createContext, ReactNode, useEffect, useState } from "react";

interface heroImageContextType {
  heroImageIndex: number;
  prevIndex: number;
  nextHandler: () => void;
  prevHandler: () => void;
}

export const HeroImageContext = createContext<heroImageContextType>({
  heroImageIndex: 0,
  prevIndex: 0,
  prevHandler: () => {},
  nextHandler: () => {},
});

export const HeroImageContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      nextHandler();
    }, 10000);
  }, []);

  const nextHandler: () => void = () => {
    setPrevIndex(heroImageIndex);
    setHeroImageIndex((x) => (x + 1) % 3);
  };

  const prevHandler: () => void = () => {
    setPrevIndex(heroImageIndex);
    heroImageIndex === 0
      ? setHeroImageIndex((x) => (x = 2))
      : setHeroImageIndex((x) => x - 1);
  };

  return (
    <HeroImageContext.Provider
      value={{ heroImageIndex, prevIndex, nextHandler, prevHandler }}
    >
      {children}
    </HeroImageContext.Provider>
  );
};

export default HeroImageContextProvider;
