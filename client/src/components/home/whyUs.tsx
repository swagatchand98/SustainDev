import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../../context/animationContext";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const impactCardsArr = [
    "Recycling 1kg of plastic saves up to 2kg of CO₂ emissions",
    "Recycling 1kg of paper saves 17 trees and 7,000 gallons of water",
    "E-waste recycling helps recover valuable metals and prevents toxic materials from entering landfills"
];

const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Residential Association President",
      content: "SustainDev has transformed how we handle waste in our apartment complex. Their team is professional, and the segregation education they provided has made a significant difference in our recycling efforts.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Building Manager",
      content: "Working with SustainDev has been a game-changer for our commercial property. Their sustainable waste management solutions have not only reduced our environmental footprint but also cut our disposal costs by 30%.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Community Organizer",
      content: "The educational workshops that SustainDev conducted in our neighborhood were eye-opening. They made complex sustainability concepts accessible and provided practical steps that our residents could immediately implement.",
    },
    {
      id: 4,
      name: "David Wilson",
      role: "School Principal",
      content: "Our partnership with SustainDev has revolutionized how our school approaches environmental education. Their youth-focused programs have inspired our students to become environmental champions in their homes and communities.",

    },
    {
      id: 5,
      name: "Anita Desai",
      role: "Hotel Operations Director",
      content: "SustainDev's waste audit revealed inefficiencies we never noticed before. Their customized solutions have helped us implement a zero-waste policy that has become a unique selling point for our eco-conscious guests.",
    }
  ];

const WhyUs: React.FC = () => {

const doubleReviews = [...reviews, ...reviews];

const reviewScrollContainer = useRef<HTMLDivElement>(null);
const [width, setWidth] = useState(0);
const [hover, sethover] = useState(false);

useEffect(() => {
    if (reviewScrollContainer.current) {
      const scrollWidth = reviewScrollContainer.current.scrollWidth;
      const offsetWidth = reviewScrollContainer.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);
    }
  }, []);

  return (
    <section>
      <ScrollReveal
        animation="fadeIn"
        className="w-full place-items-center bg-gradient-to-b from-white to-green-gradient-2 p-10"
      >
                <div className="place-items-center bg-green-100 rounded-2xl shadow-lg w-300 h-60 mt-10">
          <div className="text-2xl text-green-800 font-judson pt-5">
             Environmental Impact  
          </div>

          <div className="flex">
            {impactCardsArr.map((sub) => (
                <div className="place-items-center p-5 w-100">
                <div className="text-4xl rounded-full text-green-800 border border-green-800 p-2 mt-3">
                    <FaCheck/>
                </div>
    
                <div className="text-center p-5 text-sm text-judson text-gray-700 ">
                    {sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-300 h-70 rounded-2xl place-items-center bg-green-900/90 p-5 mt-20 shadow-2xl">
            <div className="text-3xl text-white font-judson font-bold mt-5">
            Ready to Make a Difference?
            </div>

            <div className="text-lg text-gray-200 font-judson mt-5 w-200 text-center">
            Join thousands of homes and businesses that have reduced their environmental footprint with our sustainable waste management solutions.
            </div>

            <div className="place-items-center flex mt-10">
                <div className="text-md rounded-full px-5 py-2 mx-2 bg-white text-green-800 text-center place-items-center cursor-pointer transition-all hover:bg-yellow-500 hover:text-black">
                    Schedule a Pickup
                </div>

                <div className="text-md rounded-full px-5 py-2 mx-2 text-white border border-white text-center place-items-center cursor-pointer">
                    Contact our team
                </div>
            </div>
        </div>

        <div className="text-4xl text-green-800 text-judson mt-20">
          What Our Customers Say
        </div>

        <div className="overflow-hidden max-w-full">
        <motion.div
        ref={reviewScrollContainer}
        className="flex"
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
        animate={{
            x: hover ? 0 : -width
        }}
        transition={{
            x: {
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                duration: hover ? 100000 : 20,
            }
        }}
        >
            {doubleReviews.map((review, index) => (
                <div key={`${review.id}-${index}`} className=" flex-shrink-0 w-200 h-70 shadow-2xl rounded-2xl p-5 mt-10 place-items-center mx-4 my-10 cursor-pointer">
                <div className="text-black text-lg text-center m-5 text-judson italic">
                  {review.content}
                </div>
      
                <div className="pt-10 text-judson text-xl green-800">
                  {review.name}
                </div>
      
                <div className="text-sm text-gray-500 pt-2 font-judson">
                  {review.role}
                </div>
              </div>
            ))}
        </motion.div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default WhyUs;
