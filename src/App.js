import './App.css';
import { 
  BrowserRouter,
  Routes, 
  Route, 
  Link 
} from "react-router-dom";
import Home from "./Pages/Home/Home/Home"
import Header from "./Pages/Common/Header/Header"
import Footer from "./Pages/Common/Footer/Footer"
function App() {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
     <Route index element={<Home/>} />
     </Routes>
     <Footer></Footer>
    </BrowserRouter>
  )

}

export default App;
