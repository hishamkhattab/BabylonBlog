import React from "react";
import "./style.css";

const MainLayout = ({ children }) => {
  return (
    <div className="d-flex main-container">
      {/* sidebar */}
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <p className="sidebar-title text-light">MAIN</p>
          <div className="sidebar-title">
            <div className="sidebar-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ff7500"
                class="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
              <p className="text-light ms-2">Discover</p>
            </div>
            <div className="sidebar-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ff7500"
                class="bi bi-lightning-charge-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
              </svg>
              <p className="text-light ms-2">Trending</p>
            </div>
            <div className="sidebar-link">
              {/* <div className="sidebar-link-icon"> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ff7500"
                class="bi bi-bookmark-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"
                />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
              </svg>
              {/* </div> */}
              <p className="text-light ms-2">Bookmarked</p>
            </div>
          </div>
        </div>
      </div>
      {/* main */}
      <div className="w-75">
        {/* header */}
        <div className="header">
          <div class="input-group mb-3 w-50">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="search"
              aria-describedby="basic-addon1"
            />
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </span>
            </div>
          </div>

          <div className="user"></div>
        </div>
        {/* page-content */}
        <div className="main">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
