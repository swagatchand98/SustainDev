import { createContext, ReactNode, useState } from "react";

interface navBarContextType {

    isNavBarOpen: boolean;
    toggleNavBar: () => void;
}
 
export const NavBarContext = createContext<navBarContextType>({
    isNavBarOpen: false,
    toggleNavBar: () => {}
});

export const NavBarContextProvider: React.FC<{children : ReactNode}> = ({children}) => {

    const [isNavBarOpen, setIsNavBarOpen] = useState(false)

    const toggleNavBar = () => {
        setIsNavBarOpen(!isNavBarOpen)
    }

    return <NavBarContext.Provider value={{isNavBarOpen, toggleNavBar}}>
        {children}
    </NavBarContext.Provider>
}

export default NavBarContextProvider;