import React from "react";
import './ContentInfo.css'

function ContentInfo() {
    return( 
    <section className="content">
        <div className="platformInfo">
            <h1>What You will learn</h1>
            <p>Up-to-date knowledge from recognized market experts for beginners and practitioners</p>
            <p>On the platform, you can gain knowledge on current topics and
            in-demand skills. All courses are aimed at practice: we monitor the relevance of the material and help with employment and internship</p>
        </div>
        <div className="statistics">
            <div className="stat1">
                <h1>56</h1>
                <p>Courses</p>
            </div>
            <div className="stat2">
                <h1>108</h1>
                <p>Creators</p>
            </div>
            <div className="stat3">
                <h1>3 723</h1>
                <p>Graduates</p>
            </div>
        </div>
        </section>
        )
}
export default ContentInfo;