import ServiceCard from "./serviceCard";
import recycle from "../../assets/recycle.jpeg";
import tree from "../../assets/tree.jpg";
import waste from "../../assets/waste-segregation.jpg";
import ScrollReveal from "../../context/animationContext";

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

const Services: React.FC = () => {
  return (
    <section 
      id="services"
      className="min-h-screen w-full place-items-center pt-30
      bg-gradient-to-b from-green-gradient-2 to bg-white"
    >
      <ScrollReveal 
      animation="fadeIn"
      className="h-80 w-320 bg-green-300 place-items-center p-10 rounded-2xl shadow-2xl"
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
      </ScrollReveal>

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
    </section>
  );
};

export default Services;