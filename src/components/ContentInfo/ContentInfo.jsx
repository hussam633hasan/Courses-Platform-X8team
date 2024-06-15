import React from "react";
import './ContentInfo.css'

function ContentInfo() {
    return( 
    <section className="content">
        <div className="platformInfo">
            <h2>What You will learn</h2>
            <p>Up-to-date knowledge from recognized market experts for beginners and practitioners</p>
            <p>On the platform, you can gain knowledge on current topics and
            in-demand skills. All courses are aimed at practice: we monitor the relevance of the material and help with employment and internship</p>
        </div>
        <div className="statistics">
            <div className="stat1">
                <h2>56</h2>
                <p>Courses</p>
            </div>
            <div className="stat2">
                <h2>108</h2>
                <p>Creators</p>
            </div>
            <div className="stat3">
                <h2>3<span className="hidden-span">,</span>723</h2>
                <p>Graduates</p>
            </div>
        </div>
        </section>
        )
}
export default ContentInfo;