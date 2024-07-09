import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/Dashboard/SideBar/logo.svg";
import WhiteStudentSay from "./assets/images/Dashboard/SideBar/WhiteStudentSay";
import BlackStudentSay from "./assets/images/Dashboard/SideBar/BlackStudentSay";
import WhiteArticle from "./assets/images/Dashboard/SideBar/WhiteArticle";
import BlackArticle from "./assets/images/Dashboard/SideBar/BlackArticle";

import "./SideBar.css";

export default function Sidebar() {
  const [activeButton, setActiveButton] = useState(1);

  const ButtonData = [
    {
      id: 1,
      imgURL: activeButton === 1 ? WhiteStudentSay : BlackStudentSay,
      content: "students Say",
      kbClass: "ke-link",
      show: "ke-dash-sidebarink-show",
      to: "/dashboard",
    },
    {
      id: 2,
      imgURL: activeButton === 2 ? WhiteArticle : BlackArticle,
      content: "Article",
      kbClass: "ke-link",
      show: "ke-dash-sidebarink-show",
      to: "/articledashboard",
    },
  ];

  return (
    <div className="ke-dash-sidebar">
      <div className="ke-sidebar-logo">
        <img className="ke-sidebar-logo-img" src={logo} />
        <Link to={"/"} className="ke-sidebar-update">
          UpDate
        </Link>
        {/* <img className="ke-sidebar-logo-img" src={logo} alt="Logo" />
        <div className="ke-sidebar-update">UpDate</div> */}
      </div>
      <div className="ke-content">
        {ButtonData.map((k, index) => (
          <div
            key={index}
            className={`ke-dash-sidebar-buttons ${
              activeButton === k.id ? "ke-buttons-active" : ""
            } ${k.kbClass}`}
            onClick={() => setActiveButton(k.id)}
          >
            <img className={`ke-dash-sidebar-buttons-img`} src={k.imgURL} />
            <Link to={k.to} className={k.show}>
              {k.content}
            </Link>
          </div>
        ))}
        <div className="ke-logOut">Log out</div>
      </div>
    </div>
  );
}
