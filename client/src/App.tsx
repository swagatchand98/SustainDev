import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./screens/home";
import { LoginScreen, SignupScreen } from "./screens/Auth";
import Wallet from "./components/home/wallet";
import SchedulePickup from "./components/home/schedulePickup";
import { AuthContextProvider, useAuth } from "./context/authContext";

const PrivateRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="wallet" element={<PrivateRoute element={<Wallet />} />} />
          </Route>
          <Route path="/schedule-pickup" element={<PrivateRoute element={<SchedulePickup />} />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
};

export default App;