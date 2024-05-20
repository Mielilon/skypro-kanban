import { createContext, useState } from "react";
import { getDataFromStorage } from "../utils/getDataFromStorage";

export const UserContext = createContext(null);

const key = "user";

export function UserProvider({ children }) {
  const [user, setUser] = useState(getDataFromStorage(key));

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem(key, JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(key);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
