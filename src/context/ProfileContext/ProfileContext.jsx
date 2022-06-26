import { useState } from 'react';
import { createContext } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [ username, setUsername ] = useState('');
  const [ countPosts, setCountPosts ] = useState(10);

  const onChangeUsername = ( username ) => setUsername( username ); 
  const onChangeCountPosts = ( count ) => setCountPosts( count ); 
  
  return (
    <ProfileContext.Provider value={{
      username,
      countPosts,

      // Methods
      onChangeUsername,
      onChangeCountPosts,
    }}>
      { children }
    </ProfileContext.Provider>
  )
}