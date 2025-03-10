import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FcSalesPerformance } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

interface Transaction {
  date: string;
  amount: number;
}

const Wallet: React.FC = () => {
  const navigate = useNavigate();
  
  const [transactions] = useState<Transaction[]>([
    { date: "27/02/2025 : 19:34", amount: 10 },
    { date: "25/02/2025 : 14:22", amount: 15 },
    { date: "20/02/2025 : 09:15", amount: 25 },
    { date: "15/02/2025 : 11:30", amount: 50 },
  ]);

  return (
    <div className="fixed inset-0 flex justify-center items-center w-full h-screen bg-black/20 backdrop-blur-sm z-50">
      <div className="w-80 sm:w-96 h-auto bg-[#BEFEB4] shadow-2xl rounded-2xl p-4 max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center px-3 mb-2">
          <h2 className="text-2xl font-judson font-bold">Wallet</h2>
          <button 
            onClick={() => navigate(-1)} 
            className="text-xl hover:text-gray-600 transition-colors"
            aria-label="Close wallet"
          >
            <RxCross2 />
          </button>
        </div>

        <div className="h-px w-full bg-black mb-4"></div>

        <div className="flex justify-center items-center w-full py-6 text-4xl font-judson font-bold text-amber-700 gap-x-2">
          100 Coins <FcSalesPerformance />
        </div>

        <div className="w-full flex-1 p-2">
          <h3 className="font-judson text-lg mb-2">History:</h3>

          <div className="w-full h-48 bg-white rounded-lg overflow-y-auto p-3 shadow-inner">
            {transactions.length > 0 ? (
              transactions.map((transaction, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center w-full py-2 border-b border-gray-100 text-sm"
                >
                  <div>{transaction.date}</div>
                  <div className="font-medium">{transaction.amount} coins</div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-4">No transaction history</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;