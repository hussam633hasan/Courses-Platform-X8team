import Footer from './components/Footer/Footer';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Blog from './pages/Blog/Blog';
import Article from './pages/Article/Article';
import Dashboard from './pages/Dashboard/Dashboard';


function App() {
  return (
    <>
<<<<<<< HEAD
      <Footer />
=======
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/courses' element ={<Courses />}/>
      <Route path='/blog' element ={<Blog />}/>
      <Route path='/article' element ={<Article />}/>
      <Route path='/dashboard' element ={<Dashboard />}/>
    </Routes>
      
>>>>>>> aac04807ea4f8eb040305bdf209f1cc69d81476c
    </>
  )
}

export default App
