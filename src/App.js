import './App.css';
// import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Pages/Common/Header/Header';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

import Footer from './Pages/Common/Footer/Footer';
import Service from './Pages/Service/Service';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './Contexts/AuthProvider';
import Login from './Pages/Login/Login';
import UserSettings from './Pages/userSettings/UserSettings';
import UserProfle from './Pages/userSettings/UserProfle';
import ResetPass from './Pages/userSettings/resetPass';


function App() {
  return (
    
       <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donors" element={<Service />} />
          <Route path="/details/:name" element={<Service />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetpass" element={<ResetPass />} />
          <Route path="/settings/:email" element={<UserSettings />} />
          <Route path="/profile/:email" element={<UserProfle />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/js/swiper.min.js"></script>
    
    </AuthProvider>
  );
}

export default App;
