import { Routes, Route } from 'react-router-dom'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Online from './components/Online.jsx'
import Chat from './components/Chat.jsx'


function App() {

  return (
    // Jinshin: This is the routes, do not touch this
    <Routes>
      <Route path='/' element={<Online/>} exact/>
      <Route path='/home' element={<Online/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Register/>}/>
      <Route path='/chats' element={<Chat/>}/>
    </Routes>
  )

}

export default App
