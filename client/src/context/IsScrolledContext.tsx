import { useScroll } from "motion/react";
import { createContext, ReactNode, useEffect, useState } from "react";

interface isScrolledContextType {
    isScrolled: boolean;
}

export const IsScrolledContext = createContext<isScrolledContextType>({
    isScrolled: false,
});

export const IsScrolledContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrolling = scrollY.on("change", (latest) => {
      if (latest > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });

    return () => scrolling();
  }, [scrollY]);

  return (
    <IsScrolledContext.Provider value={{ isScrolled }}>
      {children}
    </IsScrolledContext.Provider>
  );
};

export default IsScrolledContext;
