// import logo from './logo.svg';
import { BrowserRouter, Route, Routes,Switch } from 'react-router-dom';
import './App.css';
import ForgotPass from './components/ForgotPass/ForgotPass';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Profile from './components/Profile/Profile';
import ProfileUpdate from './components/ProfileUpdate/ProfileUpdate';
import UpdatePassword from './components/UpdatePassword/UpdatePassword';
import News from './components/News/News';





function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Login/>}/>
        <Route path='/LoginSignup' element={<LoginSignup/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/ProfileUpdate' element={<ProfileUpdate/>} />
        <Route path='/updatepass' element={<UpdatePassword/>}/>
        <Route path='/Forgotpass' element={<ForgotPass/>}/>
        
        <Route path='/News' element={<News/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
