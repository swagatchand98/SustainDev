import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

interface AnimationVariants extends Variants {
    hidden: Record<string, any>;
    visible: Record<string, any>;
}

const animationVariants: Record<string, AnimationVariants> = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 1 }
      }
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" }
      }
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" }
      }
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" }
      }
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
      }
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.6 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.7, type: "spring", stiffness: 100 }
      }
    },
    flipIn: {
      hidden: { opacity: 0, rotateX: 80 },
      visible: { 
        opacity: 1, 
        rotateX: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      }
    }
  };

  interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: keyof typeof animationVariants;
    delay?: number;
    margin?: `${number}${"px" | "%"}`;
    triggerOnce?: boolean;
    className?: string;
    onclick?: () => void;
 }

 const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    animation = "fadeIn",
    delay = 0,
    margin = `-100px`,
    triggerOnce = true,
    className = "",
    onclick = () => {}
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: triggerOnce, margin });
    const controls = useAnimation();
    
    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      } else if (!triggerOnce) {
        controls.start("hidden");
      }
    }, [isInView, controls, triggerOnce]);
  
    return (
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={controls}
        variants={animationVariants[animation]}
        transition={{ delay }}
        onClick={onclick}
      >
        {children}
      </motion.div>
    );
  };

  export default ScrollReveal;
  