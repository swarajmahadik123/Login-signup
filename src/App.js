import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup.jsx';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home.jsx";
import FrontPage from "./components/FrontPage.jsx";
import { AuthProvider } from "./components/utils/Context.js";


function App() {
  

  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
