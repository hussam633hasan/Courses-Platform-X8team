
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Blog from "./pages/Blog/Blog";
import Article from "./pages/Article/Article";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbarr from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
<<<<<<< HEAD
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/courses' element ={<Courses />}/>
      <Route path='/blog' element ={<Blog />}/>
      <Route path='/article' element ={<Article />}/>
      <Route path='/dashboard' element ={<Dashboard />}/>
     
    </Routes>
      
=======
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article" element={<Article />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
>>>>>>> d9e6baa4f1d7ae7d66df1cf4b2bf12d2d137986f
    </>
  );
}

export default App;
