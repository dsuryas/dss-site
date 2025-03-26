import React from "react";
import "./TechSidebar.css";

const TechSidebar = ({ techStack }) => {
  return (
    <aside className="tech-sidebar">
      <h3 className="tech-title">Tech Stack</h3>

      <div className="tech-stack">
        {techStack.map((group) => (
          <div className="tech-group" key={group.title}>
            <h4 className="tech-group-title">{group.title}</h4>
            {group.items.map((item, index) => (
              <span className="tech-item" key={index}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default TechSidebar;
