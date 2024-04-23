import React from "react";
import "./style.css";

const MainLayout = ({ children }) => {
  return (
    <div className="d-flex main-container">
      {/* sidebar */}
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <p className="sidebar-title">MAIN</p>
          <div className="sidebar-title">
            <div className="sidebar-link">
              <div className="sidebar-link-icon">
                <i className="bi bi-house"></i>
              </div>
              <p>Discover</p>
            </div>
            <div className="sidebar-link">
              <div className="sidebar-link-icon">
                <i className="bi bi-lightning-charge-fill"></i>
              </div>
              <p>Trending</p>
            </div>
            <div className="sidebar-link">
              <div className="sidebar-link-icon">
                <i className="bi bi-bookmark-check"></i>
              </div>
              <p>Bookmarked</p>
            </div>
          </div>
        </div>
      </div>
      {/* main */}
      <div className="w-75">
        {/* header */}
        <div className="header">
          <input className="search" />
          <div className="user"></div>
        </div>
        {/* page-content */}
        <div className="main">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
