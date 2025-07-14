import {createContext,useContext,useState } from 'react';
export const UserContext = createContext();
export const useUser = () => useContext(UserContext);
export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(()=>localStorage.getItem('userName') || '');
  const login=(name)=>{
    setUserName(name);
    localStorage.setItem('userName',name);
  };
  const logout=()=>{
    setUserName('');
    localStorage.removeItem('userName');
  };
  return (
    <UserContext.Provider value={{userName,login,logout }}>
      {children}
    </UserContext.Provider>
  );
};
