// import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import { Nav } from "react-bootstrap";

const data = [
  {
    id: "dashboard",
    value: "Dashboard",
    icon: "bi bi-house",
  },
  {
    id: "statistics",
    value: "Statistics",
    icon: "bi bi-airplane",
  },
  {
    id: "reports",
    value: "Reports",
    icon: "bi bi-award",
  },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`d-flex flex-column bg-dark text-white gap`}
      style={{
        width: isCollapsed ? "100px" : "250px",
        transition: "all 0.3s",
        height: "100vh",
      }}
    >
      <div className="d-flex justify-content-between p-3">
        <span style={{ fontSize: "24px" }} className=" ">
          Logo
        </span>
        <button onClick={toggleSidebar} className="btn btn-link text-white">
          {isCollapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className="bi bi-caret-left-fill"
              viewBox="0 0 16 16"
            >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
          )}
        </button>
      </div>
      <Nav className="flex-column">
        {data.map((item) => {
          return (
            <Nav.Link href="#" className="text-white d-flex gap-3">
              <i
                className={`${
                  item.icon
                } d-flex justify-content-center align-items-center  ${
                  isCollapsed ? "fs-4" : ""
                } `}
              ></i>
              <span className={isCollapsed ? "d-none" : ""}>{item.value}</span>
            </Nav.Link>
          );
        })}
      </Nav>
    </div>
  );
};

export default Sidebar;
