import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import SignupScreen from "./screens/signupScreen";
import LoginScreen from "./screens/loginScreen";
import Wallet from "./components/home/wallet";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="wallet" element={<Wallet />} /> {/* Nested inside Home */}
        </Route>

        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
