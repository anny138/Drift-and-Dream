import {createContext,useState,useEffect} from 'react';
export const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {
  const [darkMode,setDarkMode] = useState(false); 
  useEffect(()=>{
    const savedThemePref = localStorage.getItem('darkMode');
    if(savedThemePref!==null){
      try{
        const parsed = JSON.parse(savedThemePref);
        setDarkMode(parsed);
      }
      catch(err){
        console.warn('Could not parse saved theme:',err);
      }
    }
  },[]);
  useEffect(()=>{
    localStorage.setItem('darkMode',JSON.stringify(darkMode));
    if(darkMode){
      document.body.classList.add('dark-theme');
    } 
    else{
      document.body.classList.remove('dark-theme');
    }
  },[darkMode]);
  const toggleDarkMode=()=>{
    setDarkMode(prev=>!prev); 
  };
  return(
    <ThemeContext.Provider value={{darkMode,toggleDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
};
