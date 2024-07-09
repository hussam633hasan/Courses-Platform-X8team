import React, { useState, useEffect } from "react";
import Sidebar from "../../components/SideBarDashboard/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMagnifyingGlass,
  faEye,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import "./ArticleDashboard.css";

function ArticleDashboard() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem("articleContent")) || [];
    setArticles(storedArticles);
  }, []);

  const truncateContent = (content, length) => {
    return content.length > length
      ? content.substring(0, length) + "..."
      : content;
  };

  const handleDelete = (title) => {
    const updatedArticles = articles.filter((article) => article.title !== title);
    setArticles(updatedArticles);
    localStorage.setItem("articleContent", JSON.stringify(updatedArticles));
  };

  return (
    <>
      <Sidebar />
      <div className="EI-articledash">
        <div className="EI-searchbar">
          <input type="search" placeholder="Search"></input>
          <FontAwesomeIcon
            className="EI-searchicon"
            icon={faMagnifyingGlass}
            size="sm"
            style={{ color: "#e5e5e5" }}
          />
          <FontAwesomeIcon
            className="EI-bellicon"
            icon={faBell}
            size="sm"
            style={{ color: "#e5e5e5" }}
          />
        </div>
        <div className="EI-articlehead">
          <h3>Articles</h3>
          <Link to="/addarticle">
            <button className="EI-Addnew">Add New Article</button>
          </Link>
        </div>
        <div className="EI-ArticleTable">
          <table className="EI-articletable">
            <thead>
              <tr>
                <th className="EI-table">Title</th>
                <th className="EI-table">Tag</th>
                <th className="EI-table">Content</th>
                <th className="EI-table">Date of Write</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article, index) => (
                <tr key={index} className="EI-tr">
                  <td className="EI-data">{article.title}</td>
                  <td className="EI-data">{article.tag}</td>
                  <td className="EI-data">
                    {truncateContent(article.content, 30)}
                  </td>
                  <td className="EI-data">{article.date}</td>
                  <td>
                    <Link to={`/articledetail/${encodeURIComponent(article.title)}`}>
                      <FontAwesomeIcon
                        className="EI-edit"
                        icon={faEye}
                        size="xs"
                        style={{ color: "#504dee" }}
                      />
                    </Link>
                    <Link
                      to={`/editarticle/${encodeURIComponent(article.title)}`}
                      className="EIlinks"
                    >
                      <FontAwesomeIcon
                        className="EI-edit"
                        icon={faPen}
                        size="xs"
                        style={{ color: "#504dee" }}
                      />
                    </Link>
                    <FontAwesomeIcon
                      className="EI-edit"
                      icon={faTrash}
                      size="xs"
                      style={{ color: "#504dee" }}
                      onClick={() => handleDelete(article.title)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ArticleDashboard;
