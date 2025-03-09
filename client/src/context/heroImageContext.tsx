import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState, useCallback } from "react";

interface HeroImage {
  id: number;
  url: string;
  alt: string;
}

const TOTAL_HERO_IMAGES = 3;

interface HeroImageContextType {
  heroImageIndex: number;
  prevIndex: number;
  images: HeroImage[];
  nextHandler: () => void;
  prevHandler: () => void;
  setIsHovered: Dispatch<SetStateAction<boolean>>;
  isHovered: boolean;
  isAutoPlaying: boolean;
  setIsAutoPlaying: Dispatch<SetStateAction<boolean>>;
}

const defaultImages: HeroImage[] = [
  { id: 0, url: "/images/hero-1.jpg", alt: "Hero image 1" },
  { id: 1, url: "/images/hero-2.jpg", alt: "Hero image 2" },
  { id: 2, url: "/images/hero-3.jpg", alt: "Hero image 3" },
];

export const HeroImageContext = createContext<HeroImageContextType>({
  heroImageIndex: 0,
  prevIndex: 0,
  images: defaultImages,
  prevHandler: () => {},
  nextHandler: () => {},
  setIsHovered: () => {},
  isHovered: false,
  isAutoPlaying: true,
  setIsAutoPlaying: () => {}
});

interface HeroImageContextProviderProps {
  children: ReactNode;
  initialIndex?: number;
  autoPlayInterval?: number;
  images?: HeroImage[];
}

export const HeroImageContextProvider: React.FC<HeroImageContextProviderProps> = ({
  children,
  initialIndex = 0,
  autoPlayInterval = 10000,
  images = defaultImages
}) => {
  const [heroImageIndex, setHeroImageIndex] = useState(initialIndex);
  const [prevIndex, setPrevIndex] = useState(initialIndex);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const nextHandler = useCallback(() => {
    setPrevIndex(heroImageIndex);
    setHeroImageIndex((prevIndex) => (prevIndex + 1) % TOTAL_HERO_IMAGES);
  }, [heroImageIndex]);

  const prevHandler = useCallback(() => {
    setPrevIndex(heroImageIndex);
    setHeroImageIndex((currentIndex) => 
      currentIndex === 0 ? TOTAL_HERO_IMAGES - 1 : currentIndex - 1
    );
  }, [heroImageIndex]);

  useEffect(() => {
    if (isHovered || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setPrevIndex(heroImageIndex);
      setHeroImageIndex((prevIndex) => (prevIndex + 1) % TOTAL_HERO_IMAGES);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isHovered, isAutoPlaying, heroImageIndex, autoPlayInterval]);

  return (
    <HeroImageContext.Provider
      value={{ 
        heroImageIndex, 
        prevIndex, 
        nextHandler, 
        prevHandler, 
        setIsHovered,
        isHovered,
        images,
        isAutoPlaying,
        setIsAutoPlaying
      }}
    >
      {children}
    </HeroImageContext.Provider>
  );
};

export default HeroImageContextProvider;