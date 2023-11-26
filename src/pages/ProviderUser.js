import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const ProviderUser = ({ children }) => {
  const [user, setUser] = useState(null);
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

  return (
    <UserContext.Provider value={{ user, login, logout, product, getProduct }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
