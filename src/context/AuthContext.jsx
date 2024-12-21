import React, { createContext, useContext, useState, useEffect } from "react";


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 

  
  const login = (loginData) => {
    setUser(loginData);
    localStorage.setItem("login", JSON.stringify(loginData)); 
  };

  
  const logout = () => {
    setUser(null);
    localStorage.removeItem("login"); 
  };

  
  useEffect(() => {
    const storedUser = localStorage.getItem("login");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false); 
  }, []);

  
  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  return useContext(AuthContext);
};




