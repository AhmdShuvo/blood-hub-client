import './App.css';
import { 
  BrowserRouter,
  Routes, 
  Route, 
  Link 
} from "react-router-dom";
import Header from './Pages/Header/Header';
import Home from './Pages/HomePage/Home';
import Footer from './Pages/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
     <Route index element={<Home />} />
     </Routes>
     <Footer></Footer>
    </BrowserRouter>
  )

}

export default App;
