import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'

// Jisnhin: Don't touch this
axios.defaults.baseURL = "https://chat-app-api-3nwo.onrender.com/api"

ReactDOM.createRoot(document.getElementById('root')).render(
  // Jinshin: Do not touch this
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)
