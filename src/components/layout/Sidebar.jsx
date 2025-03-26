import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile-section">
        <h1 className="profile-heading">DEEPAK SURYA</h1>
        <h2 className="profile-title">Frontend Engineer</h2>
        <p className="profile-bio">
          Frontend Engineer with 5+ years of experience specializing in React,
          TypeScript, and scalable UI architectures. Passionate about building
          reusable component libraries, optimizing performance, and automating
          UI workflows.
        </p>

        <div className="social-links">
          <a
            href="https://github.com/dsuryas"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/deepaksuryas"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>

      <div className="skills-section">
        <h3 className="section-title">Skills</h3>

        <table className="skills-table">
          <tbody>
            <tr>
              <td>Frontend</td>
              <td>React, Redux, React-Native-Web, TypeScript, Monorepo</td>
            </tr>
            <tr>
              <td>Backend</td>
              <td>JavaScript, Express</td>
            </tr>
            <tr>
              <td>Styling</td>
              <td>Styled Components, SCSS, Tailwind CSS, Shadcn UI</td>
            </tr>
            <tr>
              <td>Docs</td>
              <td>Storybook, Swagger</td>
            </tr>
            <tr>
              <td>AI</td>
              <td>LLMs & Generative AI</td>
            </tr>
          </tbody>
        </table>
      </div>
    </aside>
  );
};

export default Sidebar;
