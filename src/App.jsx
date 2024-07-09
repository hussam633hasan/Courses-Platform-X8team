import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Blog from "./pages/Blog/Blog";
import Article from "./pages/Article/Article";
import Dashboard from "./pages/Dashboard/Dashboard";
import ArticleDashboard from "./pages/Dashboard/ArticleDashboard"; 
import AddArticle from "./pages/Dashboard/AddArticles";
import EditArticle from "./pages/Dashboard/EditArticle";
import ArticleDetailPage from "./pages/Dashboard/ArticleDetail";

function App() {
  return (
    <>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article" element={<Article />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/articledashboard" element={<ArticleDashboard />} />
        <Route path="/addarticle" element={<AddArticle />} /> 
        <Route path="/editarticle/:title" element={<EditArticle />} />
        <Route path="/articledetail/:title" element={<ArticleDetailPage />} />


      </Routes>


    </>
  );
}

export default App;
