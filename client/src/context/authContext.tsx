import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import api from "../api";

interface authContextType {
    user: any | null,
    isAuthenticated: boolean,
    isLoading: boolean,
    login: (email: string, password: string) => void,
    signup: (username: string, email: string, password:string) => void,
    logout: () => void,
    checkAuth: () => void
}

export const AuthContext = createContext<authContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<{children: ReactNode}> = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const checkAuth = async () => {
        try {
          setIsLoading(true);
          const response = await api.get('/user');
          setUser(response.data);
        } catch (error) {
          console.error("Authentication check failed:", error);
          setUser(null);
        } finally {
          setIsLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const login = async(email: string, password: string) => {
        const response = await api.post('/login', {email, password});
        await checkAuth();
        return response;
    }

    const signup = async(username: string, email: string, password: string) => {
        const response = await api.post('/signup', {username ,email, password});
        return response;
    }

    const logout = async() => {
        await api.post('/logout');
        setUser(null);
    }


    return <AuthContext.Provider value={{ 
        user, 
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout,
        checkAuth
      }}>
        {children}
    </AuthContext.Provider>
}

// for using the context properly
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("AuthContext is undefined !");
    }
    return context;
};