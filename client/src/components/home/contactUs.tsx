import Footer from "../common/footer";
import ContactUsForm from "./contactUsForm";
import Map from "./map";

const ContactUs: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-green-gradient-2 to bg-green-gradient-1">
      <div className="flex justify-around items-center h-172 pt-25 px-50">
        <div className="w-120 h-120 border-1">
          <Map />
        </div>

        <div className="w-220 h-120 border-1">
          <ContactUsForm />
        </div>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
