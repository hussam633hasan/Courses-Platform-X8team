import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Blog from "./pages/Blog/Blog";
import Article from "./pages/Article/Article";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Addstudent from "./pages/Addstudent/Addstudent";
import ViewStudent from "./pages/ViewStudent/ViewStudent";

import EditStudent from "./pages/EditStudent/EditStudent.jsx";





function App() {
  return (
    <>

   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article" element={<Article />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-student" element={<Addstudent />} />
        <Route path="/view-student/:id" element={<ViewStudent />} />
        <Route path="/edit-student/:id" element={<EditStudent />} />

      </Routes>
    

    </>
  );
}

export default App;
