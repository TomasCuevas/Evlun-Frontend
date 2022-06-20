import { createContext, useState } from 'react';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [navSwitchState, setNavSwitchState ] = useState(false);

  const onNavSwitch = ( newValue = false ) => {
    setNavSwitchState( newValue );
  }
  
  return (
    <MainContext.Provider value={{ 
      navSwitchState, 
      onNavSwitch 
    }}>
      { children }
    </MainContext.Provider>
  )
}