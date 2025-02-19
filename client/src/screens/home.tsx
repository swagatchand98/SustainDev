import Header from "../components/common/header";
import Hero from "../components/home/hero";
import ConfirmOrder from "../components/home/confirmOrder";
import Services from "../components/home/services";
import ContactUs from "../components/home/contactUs";
import { IsScrolledContextProvider } from "../context/IsScrolledContext";
import { BrowserRouter } from "react-router-dom";
import HeroImageContextProvider from "../context/heroImageContext";

const Home: React.FC = () => {
  return (
    <div>
      <IsScrolledContextProvider>
      <HeroImageContextProvider>  
        <BrowserRouter>
          <Header />
          <Hero />
          <ConfirmOrder />
          <Services />
          <ContactUs />
        </BrowserRouter>
      </HeroImageContextProvider>
      </IsScrolledContextProvider>
    </div>
  );
};

export default Home;
