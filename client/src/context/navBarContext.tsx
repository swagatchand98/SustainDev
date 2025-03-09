import { createContext, ReactNode, useState, useCallback, useEffect } from "react";

interface NavBarContextType {
    isNavBarOpen: boolean;
    toggleNavBar: () => void;
    closeNavBar: () => void;
    openNavBar: () => void;
}
 
export const NavBarContext = createContext<NavBarContextType>({
    isNavBarOpen: false,
    toggleNavBar: () => {},
    closeNavBar: () => {},
    openNavBar: () => {}
});

interface NavBarContextProviderProps {
  children: ReactNode;
  closeOnEsc?: boolean;
  closeOnOutsideClick?: boolean;
}

export const NavBarContextProvider: React.FC<NavBarContextProviderProps> = ({
  children,
  closeOnEsc = true,
  closeOnOutsideClick = true
}) => {
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);

    const toggleNavBar = useCallback(() => {
        setIsNavBarOpen(prevState => !prevState);
    }, []);

    const closeNavBar = useCallback(() => {
        setIsNavBarOpen(false);
    }, []);
    
    const openNavBar = useCallback(() => {
        setIsNavBarOpen(true);
    }, []);

    useEffect(() => {
        if (!closeOnEsc) return;
        
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isNavBarOpen) {
                closeNavBar();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isNavBarOpen, closeNavBar, closeOnEsc]);

    useEffect(() => {
        if (!closeOnOutsideClick || !isNavBarOpen) return;
        
        const handleOutsideClick = (event: MouseEvent) => {
            const navbarElement = document.getElementById('navbar');
            const hamburgerButton = document.getElementById('navbar-toggle');
            
            if (navbarElement && hamburgerButton && 
                !navbarElement.contains(event.target as Node) && 
                !hamburgerButton.contains(event.target as Node)) {
                closeNavBar();
            }
        };

        document.addEventListener('click', handleOutsideClick);
        
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isNavBarOpen, closeNavBar, closeOnOutsideClick]);

    return (
        <NavBarContext.Provider value={{
            isNavBarOpen, 
            toggleNavBar, 
            closeNavBar, 
            openNavBar
        }}>
            {children}
        </NavBarContext.Provider>
    );
};

export default NavBarContextProvider;