import React, { useState, useEffect } from "react";
import Sidebar from "../../components/SideBarDashboard/SideBar";
import Edit from "../../components/Add/Edit";
import { useParams, useNavigate } from "react-router-dom";

function EditArticle() {
  const { title } = useParams();
  const navigate = useNavigate();

  const [articleData, setArticleData] = useState({
    title: "",
    tag: "",
    content: "",
    date: "",
  });

  useEffect(() => {
    const articles = JSON.parse(localStorage.getItem("articleContent")) || [];
    const article = articles.find((article) => article.title === decodeURIComponent(title));

    if (article) {
      setArticleData(article);
    }
  }, [title]);

  const fields = [
    { name: "title", label: "Title", type: "text", initialValue: articleData.title },
    { name: "tag", label: "Tag", type: "text", initialValue: articleData.tag },
    { name: "content", label: "Content", type: "textarea", initialValue: articleData.content },
    { name: "date", label: "Date", type: "date", initialValue: articleData.date },
  ];

  const handleEditSubmit = (formData) => {
    console.log("Form data submitted for editing:", formData);

    const existingEntries = JSON.parse(localStorage.getItem("articleContent")) || [];

    const updatedEntries = existingEntries.map(entry =>
      entry.title === articleData.title ? formData : entry
    );

    localStorage.setItem("articleContent", JSON.stringify(updatedEntries));

    navigate('/articledashboard');
  };

  return (
    <>
      <Sidebar />
      <Edit title="Edit Article" fields={fields} onSubmit={handleEditSubmit} />
    </>
  );
}

export default EditArticle;
