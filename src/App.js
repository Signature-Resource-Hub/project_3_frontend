// import logo from './logo.svg';
import './App.css';
import ForgotPass from './components/ForgotPass/ForgotPass';
import ProfileUpdate from './components/ProfileUpdate/ProfileUpdate';
import UpdatePassword from './components/UpdatePassword/UpdatePassword';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Profile/>} />
        <Route path='/ProfileUpdate' element={<ProfileUpdate/>} />
        <Route path='/updatepass' element={<UpdatePassword/>}/>
        <Route path='/Forgotpass' element={<ForgotPass/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
