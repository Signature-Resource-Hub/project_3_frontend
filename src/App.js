
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
import FirstPage from './component/FirstPage/FirstPage';
import ViewServices from './component/AddServices/ViewServices';
import AddServices from './component/AddServices/AddServices';
import ViewHousehold from './component/AddServices/ViewHousehold';
import ViewAuto from './component/AddServices/ViewAuto';
import ViewNurse from './component/AddServices/ViewNurse';
import ViewPet from './component/AddServices/ViewPet';
import ViewTravel from './component/AddServices/ViewTravel';
import ViewLegal from './component/AddServices/ViewLegal';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/News' element={<News/>}/>
        <Route path='/Viewproperty' element={<Viewproperty/>}/>
        <Route path='/viewbyid' element={<ViewById/>}/>
        <Route path='/ViewRent' element={<ViewRent/>}/>
        <Route path='/sale' element={<ViewSale/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/updatepass' element={<UpdatePassword/>}/>
        <Route path='/Forgotpass' element={<ForgotPass/>}/>
        <Route path='/addprop' element={<AddProperty/>}/>
        <Route path='/addservices' element={<AddServices/>}/>
        <Route path='/addJob' element={<AddJob/>}/>
        <Route path='/viewservices' element={<ViewServices/>}/>
        <Route path='/house' element={<ViewHousehold/>}/>
        <Route path='/auto' element={<ViewAuto/>}/>
        <Route path='/nurse' element={<ViewNurse/>}/>
        <Route path='/pet' element={<ViewPet/>}/>
        <Route path='/travel' element={<ViewTravel/>}/>
        <Route path='/legal' element={<ViewLegal/>}/>
        <Route path='/viewallj' element={<ViewAllJob/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/LoginSignup' element={<LoginSignup/>}/>
        <Route path='/ViewjobbyId' element={<ViewIdJob/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Firstpage' element={<FirstPage/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;