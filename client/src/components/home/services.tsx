import ServiceCard from "./serviceCard";
import recycle from "../../assets/recycle.jpeg"
import tree from "../../assets/tree.jpg"
import waste from "../../assets/waste-segregation.jpg"

const Services: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen w-full gap-y-5 pt-10 xs:pt-0 md:gap-x-5 lg:gap-x-10 xl:gap-x-20 bg-gradient-to-t from-green-gradient-2 to bg-green-gradient-1">
      <ServiceCard
        title="Recycling Services"
        body="We offer doorstep waste collection services with a focus on proper segregation. Our team ensures that recyclables, organic waste, and hazardous materials are separated efficiently, promoting eco-friendly disposal and reducing landfill waste."
        img={recycle}
      />
      <ServiceCard
        title="Waste Minimization and Consultation"
        body="Our advanced recycling services help transform waste materials into reusable resources. From plastics and metals to e-waste and paper, we ensure that collected items are processed responsibly, contributing to a circular economy and a cleaner environment."
        img={tree}
      />
      <ServiceCard
        title="Waste Collection and Segregation"
        body="Want to reduce waste at your home or business? Our waste minimization and consultation services provide expert guidance on sustainable practices, efficient resource utilization, and eco-friendly alternatives to help you cut down waste generation."
        img={waste}
      />
    </div>
  );
};

export default Services;
