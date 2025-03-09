import { lazy, Suspense } from "react";
import Header from "../components/common/header";
import { IsScrolledContextProvider } from "../context/IsScrolledContext";
import HeroImageContextProvider from "../context/heroImageContext";
import NavBarContextProvider from "../context/navBarContext";
import { Outlet } from "react-router-dom";

const Hero = lazy(() => import("../components/home/hero"));
const Services = lazy(() => import("../components/home/services"));
const ContactUs = lazy(() => import("../components/home/contactUs"));

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <IsScrolledContextProvider>
      <HeroImageContextProvider>  
      <NavBarContextProvider>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <main>
              <Hero />
              <Services />
              <ContactUs />
            </main>
            <Outlet/>
          </Suspense>
      </NavBarContextProvider>
      </HeroImageContextProvider>
      </IsScrolledContextProvider>
    </div>
  );
};

export default Home;
