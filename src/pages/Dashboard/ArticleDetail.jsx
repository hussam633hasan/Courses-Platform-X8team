import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DashboardCardArticle from "../../components/DashboardCard/DashboardCardArticle";
import Sidebar from "../../components/SideBarDashboard/SideBar";

function ArticleDetailPage() {
  const { title } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const articles = JSON.parse(localStorage.getItem("articleContent")) || [];
    const foundArticle = articles.find(
      (article) => article.title === decodeURIComponent(title)
    );
    setArticle(foundArticle);
  }, [title]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Sidebar />
      <DashboardCardArticle
        title={article.title}
        tag={article.tag}
        content={article.content}
      />
    </>
  );
}

export default ArticleDetailPage;
