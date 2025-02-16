import Hero from "../components/home/hero";
import ConfirmOrder from "../components/home/confirmOrder";
import Header from "../components/common/header"
import Services from "../components/home/services";
import { BrowserRouter } from "react-router-dom";


const Home : React.FC = () => {

    return <div>
        <BrowserRouter>
        <Header/>
        <Hero/>
        <ConfirmOrder/>
        <Services/>
        </BrowserRouter>
    </div>
}

export default Home;