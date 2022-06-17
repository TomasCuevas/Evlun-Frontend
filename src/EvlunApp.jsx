import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

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

export const EvlunApp = () => {
  const { auth, loading } = useContext(AuthContext);
  
  return (
    <>
      {
        !loading && (
          <Router>
            <Routes>

              <Route path='/' element={ (auth) ? <MainPage /> : <LoginPage /> } />
              <Route path='/signup' element={ (auth) ? <Navigate to='/' /> : <SignupPage /> } />
              <Route path='/login' element={ (auth) ? <Navigate to='/' /> : <LoginPage /> } />
              <Route path='*' element={ <Navigate to='/' /> } />

            </Routes>
          </Router>
        )
      }
    </>
  )
}