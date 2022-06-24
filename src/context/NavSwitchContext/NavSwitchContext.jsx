import { createContext, useState } from 'react';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [navSwitch, setNavSwitch ] = useState(false);

  const onNavSwitch = ( newValue = false ) => {
    setNavSwitch( newValue );
  }
  
  return (
    <MainContext.Provider value={{ 
      navSwitch, 
      onNavSwitch 
    }}>
      { children }
    </MainContext.Provider>
  )
}