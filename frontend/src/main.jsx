import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Online from './components/Online.jsx'
import Chat from './components/Chat.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Chat />
  </React.StrictMode>,
)
