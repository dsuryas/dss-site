import React from "react";
import timelineData from "../../data/timeline";
import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="timeline">
      {timelineData.map((item) => (
        <div className="timeline-item" key={item.id}>
          <div className="timeline-dot"></div>
          <div className="timeline-date">{item.date}</div>
          <div className="timeline-content">
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
