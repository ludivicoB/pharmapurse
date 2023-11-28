import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const ProviderUser = ({ children }) => {
  // Retrieve user data from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));

  // Initialize user state with stored data or null
  const [user, setUser] = useState(storedUser || null);
  const [product, setProduct] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const getProduct = (productData) => {
    setProduct(productData);
  };

  // Use useEffect to update localStorage whenever user changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, login, logout, product, getProduct }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
