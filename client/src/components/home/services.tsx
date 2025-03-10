import ServiceCard from "./serviceCard";
import recycle from "../../assets/recycle.jpeg";
import tree from "../../assets/tree.jpg";
import waste from "../../assets/waste-segregation.jpg";
import ScrollReveal from "../../context/animationContext";
import { CiClock2 } from "react-icons/ci";
import { LuIndianRupee, LuMapPin } from "react-icons/lu";

const serviceData = [
  {
    title: "Recycling Services",
    body: "We offer doorstep waste collection services with a focus on proper segregation. Our team ensures that recyclables, organic waste, and hazardous materials are separated efficiently, promoting eco-friendly disposal and reducing landfill waste.",
    img: recycle
  },
  {
    title: "Waste Minimization and Consultation",
    body: "Our advanced recycling services help transform waste materials into reusable resources. From plastics and metals to e-waste and paper, we ensure that collected items are processed responsibly, contributing to a circular economy and a cleaner environment.",
    img: tree
  },
  {
    title: "Waste Collection and Segregation",
    body: "Want to reduce waste at your home or business? Our waste minimization and consultation services provide expert guidance on sustainable practices, efficient resource utilization, and eco-friendly alternatives to help you cut down waste generation.",
    img: waste
  }
];

const serviceCardsArr = [
  {
    icon: <LuMapPin />,
    title: "Convenient Pickup",
    subtitle:
      "We come to your doorstep at scheduled times, making recycling easy and hassle-free.",
  },
  {
    icon: <CiClock2 />,
    title: "Flexible Timing",
    subtitle:
      "Choose collection times that fit your schedule - weekdays, weekends, or evenings.",
  },
  {
    icon: <LuIndianRupee />,
    title: "Rewards Program",
    subtitle:
      "Earn points for your recyclables that can be redeemed for eco-friendly products or cash.",
  },
];

const Services: React.FC = () => {
  return (
    <section 
      id="services"
      className="min-h-screen w-full place-items-center pt-30
      bg-gradient-to-b from-green-gradient-2 to bg-white" 
    >
      <div className="text-4xl text-green-900 font-judson pt-20 font-bold">
          Why Choose SustainDev
        </div>

        <div className="text-lg text-gray-500 font-judson pt-2">
          Our commitment to sustainability goes beyond recycling
        </div>

        <div className="flex justify-center items-center p-5 pt-15">
          {serviceCardsArr.map((card) => (
            <div className="place-items-center p-5 mx-7 w-100 h-70 rounded-2xl shadow-xl bg-white/20 transition-transform hover:-translate-y-3">
              <div className="text-4xl bg-green-1 text-green-800 rounded-full pt-5">
                {card.icon}
              </div>

              <div className="text-4xl text-green-900 font-judson pt-5">
                {card.title}
              </div>

              <div className="text-lg text-gray-500 font-judson pt-5 text-center px-5">
                {card.subtitle}
              </div>
            </div>
          ))}
        </div>

      <ScrollReveal 
      animation="fadeIn"
      className="h-260 w-350 bg-white/10 place-items-center p-10 rounded-2xl shadow-2xl my-20"
      >
        <div className="font-judson font-bold text-4xl text-green-900 pt-5">
          Our Sustainability Services
        </div>
        <div className="font-judson text-lg text-gray-800 text-center w-150 py-5">
          Helping businesses and communities reduce waste, improve recycling efforts, and build a more sustainable future for our planet.
        </div>
        <div className="font-judson text-md bg-green-800 text-white font-light rounded-full p-2 px-5 mt-10 hover:bg-green-900 cursor-pointer">
          Schedule a Consultation
        </div>

      <ScrollReveal className="flex m-10 mt-20">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              body={service.body}
              img={service.img}
            />
          ))}
      </ScrollReveal>
      </ScrollReveal>
    </section>
  );
};

export default Services;