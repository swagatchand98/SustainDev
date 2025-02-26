import { RxCross2 } from "react-icons/rx";

const Wallet : React.FC = () => {

    return <div className="w-screen h-screeen bg-black">
        <div className="w-200 h-200 bg-green-300 shadow-2xl z-40">
            <div>
                <div>
                    Wallet
                </div>
                <RxCross2/>
            </div>

            <div>
                100 Coins
            </div>

            <div>
                <div>
                    History
                </div>

                <div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Wallet