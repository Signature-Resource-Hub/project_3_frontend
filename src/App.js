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
import AddProperty from './components/AddProperty/AddProperty';
import Jobs from './components/Jobs/Jobs';
import AddJob from './components/AddJob/AddJob';
import Viewproperty from './components/ViewProperty/Viewproperty';
import ViewRent from './components/ViewProperty/ViewRent';
import ViewSale from './components/ViewProperty/ViewSale';
import AddServiceForm from './components/AddServices/AddServices';
import Recommend from './components/Jobs/Recommend';
import ViewServices from './components/AddServices/ViewServices';






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
        
        <Route path='/addprop' element={<AddProperty/>}/>
        <Route path='/job' element={<Jobs/>}/>
        <Route path='/recommend' element={<Recommend/>}/>
        <Route path='/addJob' element={<AddJob/>}/>
        <Route path='/addServices' element={<AddServiceForm/>}/>
        <Route path='/viewservices' element={<ViewServices/>}/>

        <Route path='/viewprop' element={<Viewproperty/>}/>
        <Route path='/news'element={<News/>}/>
        <Route path='/rent'element={<ViewRent/>}/>
        <Route path='/sale'element={<ViewSale/>}/>
      
        
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
