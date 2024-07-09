import React from 'react';
import "./DashboardCard.css";

function DashboardCardArticle({ title, tag, content }) {
  return (
    <section className='DJ-dashboardCard'>
      <img src="/assets/images/Dashboard/Vector.svg" alt="" />
      <div className="DJ-studentCard">
        <div className="DJ-cardTitle d-flex gap-3">
          <img src="/assets/images/Dashboard/user icon left.svg" alt="" />
          <div className="DJ-titleText">
            <h4>{title}</h4>
            <span>{tag}</span>
          </div>
        </div>
        <p>{content}</p>
      </div>
    </section>
  );
}

export default DashboardCardArticle;
