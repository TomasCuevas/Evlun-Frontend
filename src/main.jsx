import React from 'react'
import ReactDOM from 'react-dom/client'

import { AuthProvider } from './context/AuthContext/AuthContext';
import { EvlunApp } from './EvlunApp'
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <EvlunApp />
  </AuthProvider>
)
