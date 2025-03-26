import React from "react";
import experienceData from "../../data/experience";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="tab-content active" id="experience">
      {experienceData.map((job) => (
        <div className="experience-item" key={job.id}>
          <div className="experience-header">
            <h3 className="experience-title">
              {job.title}
              <span className="experience-company">@ {job.company}</span>
            </h3>
            <span className="experience-duration">{job.duration}</span>
          </div>
          <div className="experience-description">
            <ul>
              {job.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
