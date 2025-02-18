import Header from "../components/common/header";
import Hero from "../components/home/hero";
import ConfirmOrder from "../components/home/confirmOrder";
import Services from "../components/home/services";
import ContactUs from "../components/home/contactUs";
import { IsScrolledContextProvider } from "../context/IsScrolledContext";
import { BrowserRouter } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <IsScrolledContextProvider>
        <BrowserRouter>
          <Header />
          <Hero />
          <ConfirmOrder />
          <Services />
          <ContactUs />
        </BrowserRouter>
      </IsScrolledContextProvider>
    </div>
  );
};

export default Home;
