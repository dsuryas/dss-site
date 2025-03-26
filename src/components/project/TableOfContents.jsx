import React from "react";
import "./TableOfContents.css";

const TableOfContents = ({ sections }) => {
  return (
    <aside className="toc-sidebar">
      <h3 className="toc-title">Table of Contents</h3>
      <ul className="toc-list">
        {sections.map((section) => (
          <li className="toc-item" key={section.id}>
            <a
              href={`#${section.id}`}
              className={`toc-link ${section.isSubheading ? "subheading" : ""}`}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TableOfContents;
