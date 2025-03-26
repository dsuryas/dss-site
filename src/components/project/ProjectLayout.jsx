import React from "react";
import ThemeToggle from "../common/ThemeToggle";
import Spotlight from "../common/Spotlight";
import "./ProjectLayout.css";

const ProjectLayout = ({ children }) => {
  return (
    <div className="noir-filter">
      <Spotlight />
      <ThemeToggle />
      <div className="project-container">{children}</div>
    </div>
  );
};

export default ProjectLayout;
