
import './App.css';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginSignup/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path="/dashboard" element={ <Dashboard/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
