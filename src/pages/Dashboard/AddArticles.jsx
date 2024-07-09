import React from "react";
import Add from "./../../components/Add/Add";
import Sidebar from "../../components/SideBarDashboard/SideBar";
import { useNavigate } from "react-router-dom";


function AddArticle() {
  const navigate = useNavigate();
  const fields = [
    { name: "title", label: "Title", type: "text" },
    { name: "tag", label: "Tag", type: "text" },
    { name: "content", label: "Content", type: "textarea" },
    { name: "date", label: "Date", type: "date" },
  ];

  const handleSubmit = (data) => {
    const existingEntries = JSON.parse(localStorage.getItem("articleContent")) || [];
    existingEntries.push(data);
    localStorage.setItem("articleContent", JSON.stringify(existingEntries));
    navigate('/articledashboard');
  };

  return (
    <>
      <Sidebar />
      <Add title="Add New Article" fields={fields} onSubmit={handleSubmit} />
    </>
  );
}

export default AddArticle;
