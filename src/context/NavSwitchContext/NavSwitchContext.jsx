import { createContext, useState } from 'react';

export const NavSwitchContext = createContext();

export const NavSwitchProvider = ({ children }) => {
  const [navSwitch, setNavSwitch ] = useState(false);

  const onNavSwitch = ( newValue = false ) => {
    setNavSwitch( newValue );
  }
  
  return (
    <NavSwitchContext.Provider value={{ 
      navSwitch, 
      onNavSwitch 
    }}>
      { children }
    </NavSwitchContext.Provider>
  )
}