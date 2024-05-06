
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePage/HomePage';
import Login from './component/Login/Login';
import News from './component/News/News';
import Viewproperty from './component/ViewProperty/Viewproperty';
import ViewById from './component/ViewProperty/ViewById';
import ViewRent from './component/ViewProperty/ViewRent';
import ViewSale from './component/ViewProperty/ViewSale';
import Profile from './component/Profile/Profile';
import UpdatePassword from './component/UpdatePassword/UpdatePassword';
import ForgotPass from './component/ForgotPass/ForgotPass';
import AddProperty from './component/AddProperty/AddProperty';
import AddJob from './component/AddJob/AddJob';
import ViewAllJob from './component/ViewAllJob/ViewAllJob';
import Jobs from './component/ViewAllJob/Jobs';
import LoginSignup from './component/LoginSignup/LoginSignup';
import ViewIdJob from './component/ViewAllJob/ViewIdJob';
import ContactUs from './component/ContactUs/ContactUs';
import About from './component/About/About';
import Mainpage from './component/MainPage.jsx/Mainpage';




function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/main' element={<Mainpage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/' element={<Login/>} />
        <Route path='/News' element={<News/>}/>
        <Route path='/Viewproperty' element={<Viewproperty/>}/>
        <Route path='/viewbyid' element={<ViewById/>}/>
        <Route path='/ViewRent' element={<ViewRent/>}/>
        <Route path='/sale' element={<ViewSale/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/updatepass' element={<UpdatePassword/>}/>
        <Route path='/Forgotpass' element={<ForgotPass/>}/>
        <Route path='/addprop' element={<AddProperty/>}/>
        <Route path='/addJob' element={<AddJob/>}/>
        <Route path='/viewallj' element={<ViewAllJob/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/LoginSignup' element={<LoginSignup/>}/>
        <Route path='/ViewjobbyId' element={<ViewIdJob/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/about' element={<About/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
