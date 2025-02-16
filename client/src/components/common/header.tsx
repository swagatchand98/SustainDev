import { Link } from "react-router-dom";

const Header : React.FC = () => {

    return <div className="w-screen h-17 bg-transparent flex justify-center items-center py-15">
    <div className="flex justify-between items-center w-350 h-17 bg-green-100 rounded-full px-30">
        <div className="flex items-center">
            <img className="w-48" src="/src/assets/logo.png" alt="sustaindev" />
        </div>

        <div className="">
            <nav>
                <ul className="flex justify-between items-center text-2xl font-judson font-extralight">
                    <li className="px-5">
                        <Link to={"/"}>Home</Link>
                    </li>
                    
                    <li className="px-5">
                        <Link to={"/services"}>Services</Link>
                    </li>

                    <li className="px-5">
                        <Link to={"/about-us"}>About-us</Link>
                    </li>

                    <li className="px-5">
                        <Link to={"/contacts"}>Contacts</Link>
                    </li>
                </ul>
            </nav>
        </div>

        <div className="flex justify-center w-40 h-8 rounded-full text-xl font-extralight items-center border-2 border-black font-judson">
            <Link to={"/login"}>
                Sign Up / Log in
            </Link>
        </div>
    </div>
</div>
}

export default Header;