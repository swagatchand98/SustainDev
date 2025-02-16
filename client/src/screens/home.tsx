import Hero from "../components/home/hero";
import ConfirmOrder from "../components/home/confirmOrder";
import Header from "../components/common/header"
import { BrowserRouter } from "react-router-dom";


const Home : React.FC = () => {

    return <div>
        <BrowserRouter>
        <Header/>
        <Hero/>
        <ConfirmOrder/>
        </BrowserRouter>
    </div>
}

export default Home;