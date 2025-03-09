import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import { LoginScreen, SignupScreen } from "./screens/Auth";
import Wallet from "./components/home/wallet";
import SchedulePickup from "./components/home/schedulePickup";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="wallet" element={<Wallet />}/>
        </Route>
        <Route path="/Schedule-Pickup" element={<SchedulePickup/>}/>
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
