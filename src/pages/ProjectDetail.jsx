import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import ProjectLayout from "../components/project/ProjectLayout";
import TableOfContents from "../components/project/TableOfContents";
import TechSidebar from "../components/project/TechSidebar";
import { projects } from "../data/projectContent"; // Import projects object directly
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Get the specific project based on projectId
  const project = projects[projectId];

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    // If project doesn't exist, redirect to home
    if (!project) {
      navigate("/");
    }
  }, [projectId, project, navigate]);

  // If project is not found, show loading state while redirect happens
  if (!project) {
    return <div>Project not found. Redirecting...</div>;
  }

  return (
    <ProjectLayout>
      <TableOfContents sections={project.sections} />

      <main className="project-content">
        <div className="project-header">
          <h1 className="project-title">{project.title}</h1>
          <p className="project-date">{project.date}</p>
        </div>

        {project.contentSections &&
          project.contentSections.map((section) => (
            <div key={section.id} id={section.id}>
              <h2 id={section.id}>{section.title}</h2>
              {parse(section.content)}
            </div>
          ))}

        <Link to="/" className="back-link">
          ← Back to Portfolio
        </Link>
      </main>

      <TechSidebar techStack={project.techStack} />
    </ProjectLayout>
  );
};

export default ProjectDetail;
