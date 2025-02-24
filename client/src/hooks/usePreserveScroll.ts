import { useRef, useEffect } from "react";

const usePreserveScroll = () => {

    const scrollPosition = useRef(0);

    useEffect(()=>{
        const handleScroll = () => {
            scrollPosition.current = window.scrollY;
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.scrollTo(0, scrollPosition.current);
        }
    },[])
}

export default usePreserveScroll;