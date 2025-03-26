import React from "react";
import Sidebar from "./Sidebar";
import ThemeToggle from "../common/ThemeToggle";
import Spotlight from "../common/Spotlight";

const Layout = ({ children }) => {
  return (
    <div className="noir-filter">
      <Spotlight />
      <ThemeToggle />

      <div className="portfolio-container">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
