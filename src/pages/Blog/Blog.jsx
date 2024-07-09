import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Blog.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const initialArticles = [
  {
    id: 1,
    image: "./assets/images/Blog/image.png",
    title: "UI/UX Design Trends in 2022",
    tag: "# UI/UX Design",
    category: "Design",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga...",
    icon: "./assets/images/Blog/Icon clock.png",
    readTime: "3 min read",
    date: "April 12, 2022",
  },
  {
    id: 2,
    image: "./assets/images/Blog/image (1).png",
    title: "What new programming languages are in demand now?",
    tag: "# Programming",
    category: "Programming",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga...",
    icon: "./assets/images/Blog/Icon clock.png",
    readTime: "5 min read",
    date: "March 25, 2022",
  },
  {
    id: 3,
    image: "./assets/images/Blog/image (2).png",
    title: "Top popular styles in illustration 2022",
    tag: "# Illustration",
    category: "Illustration",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga...",
    icon: "./assets/images/Blog/Icon clock.png",
    readTime: "7 min read",
    date: "March 18, 2022",
  },
  {
    id: 4,
    image: "./assets/images/Blog/image (3).png",
    title: "The secrets of a successful frame. What rules should be followed?",
    tag: "# Photo & Film",
    category: "Photo & Film",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga...",
    icon: "./assets/images/Blog/Icon clock.png",
    readTime: "6 min read",
    date: "March 17, 2022",
  },
  {
    id: 5,
    image: "./assets/images/Blog/image (6).png",
    title: "Brainstorming in design: from the idea to its implementation",
    tag: "# UI/UX Design",
    category: "Design",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi...",
    icon: "./assets/images/Blog/Icon clock.png",
    readTime: "12 min read",
    date: "March 12, 2022",
  },
  {
    id: 6,
    image: "./assets/images/Blog/image (4).png",
    title: "Who is an Internet marketer and what does he do?",
    tag: "# Marketing",
    category: "Marketing",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi...",
    icon: "./assets/images/Blog/Icon clock.png",
    readTime: "5 min read",
    date: "February 2, 2022",
  },
];

function Blog() {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setArticles(initialArticles);
    localStorage.setItem("articles", JSON.stringify(initialArticles));
  }, []);

  const handleFilterChange = (category) => {
    setFilter(category);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const filteredArticles =
    filter === "All"
      ? articles
      : articles.filter((article) => article.category === filter);

  return (
    <>
       <Navbar/>
      <section className="category-Nav">
        <ul>
          {[
            "All",
            "Animation",
            "Design",
            "Illustration",
            "Programming",
            "Photo & Film",
            "Marketing",
          ].map((category) => (
            <li key={category}>
              <button
                className={filter === category ? "active" : ""}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
        <div className="sort-by">
          <button
            className={`dropdown-button ${dropdownOpen ? "active" : ""}`}
            onClick={toggleDropdown}
          >
            Sort by
          </button>
          <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
            {[
              "All",
              "Animation",
              "Design",
              "Illustration",
              "Programming",
              "Photo & Film",
              "Marketing",
            ].map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="blog-container">
        {filteredArticles.map((article) => (
          <Link key={article.id} to="/article" className="article-link">
            <img
              className="article-img"
              src={article.image}
              alt={article.title}
            ></img>
            <div className="article-content">
              <div>
                <h3>{article.title}</h3>
                <p className="tag">{article.tag}</p>
                <p className="snippet">{article.desc}</p>
              </div>
              <div className="article-meta">
                <div className="readtime">
                  <img src={article.icon} alt="clock-icon"></img>
                  <p>{article.readTime}</p>
                </div>
                <p>{article.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
      <section className="pages">
      <nav className="Number-Nav">
        <a href="#">&larr;</a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">...</a>
        <a href="#">10</a>
        <a href="#">&rarr;</a>
      </nav>
      </section>
      <Footer />
    </>
  );
}

export default Blog;
