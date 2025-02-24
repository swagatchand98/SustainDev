import { motion } from "motion/react";
import Footer from "../common/footer";
import ContactUsForm from "./contactUsForm";
import Map from "./map";
import ScrollReveal from "../../context/animationContext";

const ContactUs: React.FC = () => {
  return (
    <div className="h-full w-full bg-gradient-to-b from-green-gradient-2 to bg-green-gradient-1">
      <ScrollReveal animation="fadeIn" className="flex flex-col md:flex-row justify-around items-center h-auto xs:h-172 pt-35 pb-10 xs:pb-0 md:pt-25 px-20 xl:px-50">
        <motion.div
          className="min-w-85 xs:w-100 h-50 mb-2 md:mb-0 md:h-90 md:w-80 lg:w-120 lg:h-120 border-1"
          whileHover={{ scale: 1.025 }}
        >
          <Map />
        </motion.div>

        <div className="min-w-85 xs:w-100 h-auto md:w-120 md:h-90 lg:w-220 lg:h-120 border-1">
          <ContactUsForm />
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fadeIn" className="">
        <Footer />
      </ScrollReveal>
    </div>
  );
};

export default ContactUs;
