import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

/**
 * @context
 */
import { AuthContext } from './context/AuthContext/AuthContext';

/**
 * @pages
 */
import { MainPage } from './pages/MainPage/MainPage';
import { SignupPage } from './pages/SignupPage/SignupPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ExplorePage } from './pages/ExplorePage/ExplorePage';

export const EvlunApp = () => {
  const { auth, loading } = useContext(AuthContext);
  
  return (
    <>
      {
        !loading && (
          <Routes>

            <Route path='/' element={ (auth) ? <MainPage /> : <LoginPage /> } />
            <Route path='/signup' element={ (auth) ? <Navigate to='/' /> : <SignupPage /> } />
            <Route path='/login' element={ (auth) ? <Navigate to='/' /> : <LoginPage /> } />
            <Route path='/explore' element={ <ExplorePage /> } />
            <Route path='*' element={ <Navigate to='/' /> } />

          </Routes>
        )
      }
    </>
  )
}