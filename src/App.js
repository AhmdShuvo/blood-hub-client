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
import Login from './Pages/Login/Login';
import Footer from './Pages/Common/Footer/Footer';
import SignUp from './Pages/Login/SignUp';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header></Header>
        
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/js/swiper.min.js"></script>
    </div>
  );
}

export default App;
