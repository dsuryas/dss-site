import React, { useState } from "react";
import Experience from "../tabs/Experience";
import Projects from "../tabs/Projects";
import Blog from "../tabs/Blog";
import Timeline from "../tabs/Timeline";
import "./MainContent.css";

const MainContent = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main className="main-content">
      <div className="tabs-container">
        <div className="tabs-header">
          <button
            className={`tab-button ${
              activeTab === "experience" ? "active" : ""
            }`}
            onClick={() => handleTabChange("experience")}
          >
            Experience
          </button>
          <button
            className={`tab-button ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => handleTabChange("projects")}
          >
            Projects
          </button>
          <button
            className={`tab-button ${activeTab === "blog" ? "active" : ""}`}
            onClick={() => handleTabChange("blog")}
          >
            Blog
          </button>
          <button
            className={`tab-button ${activeTab === "timeline" ? "active" : ""}`}
            onClick={() => handleTabChange("timeline")}
          >
            Timeline
          </button>
        </div>

        <div className="tabs-content">
          {activeTab === "experience" && <Experience />}
          {activeTab === "projects" && <Projects />}
          {activeTab === "blog" && <Blog />}
          {activeTab === "timeline" && <Timeline />}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
