import Header from "../components/common/header"
import { BrowserRouter } from "react-router-dom";

const Home : React.FC = () => {

    return <div>
        <BrowserRouter>
        <Header/>
        </BrowserRouter>
    </div>
}

export default Home;