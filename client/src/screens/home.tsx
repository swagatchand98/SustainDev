import Header from "../components/common/header"
import { BrowserRouter } from "react-router-dom";
import Hero from "../components/home/hero";

const Home : React.FC = () => {

    return <div>
        <BrowserRouter>
        <Header/>
        <Hero/>
        </BrowserRouter>
    </div>
}

export default Home;