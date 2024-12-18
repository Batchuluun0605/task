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
      className={`d-flex flex-column bg-dark text-white gap position-relative p-3`}
      style={{
        maxWidth: isCollapsed ? "100px" : "100%",
        transition: "all 0.2s",
        height: "100vh",
      }}
    >
      <div className="d-flex justify-content-between ">
        <span style={{ fontSize: "24px" }} className=" ">
          Logo
        </span>
        <button onClick={toggleSidebar} className="btn btn-link text-white">
          <i
            className={`${
              isCollapsed
                ? "bi bi-arrow-right-circle"
                : "bi bi-arrow-left-circle"
            } position-absolute fs-4 z-1 text-success`}
            style={{ top: "40px", right: "-6px" }}
          ></i>
        </button>
      </div>
      <Nav className="flex-column py-2">
        {data.map((item) => {
          return (
            <Nav.Link
              href="#"
              className={`${
                item.id === "dashboard" ? "bg-primary rounded " : ""
              } text-white d-flex gap-3 align-items-center p-2 rounded w-auto `}
              style={{
                transition: "all 0.3",
              }}
              key={item.id}
            >
              <i className={`${item.icon} fs-4 justify-content-center `}></i>
              <span
                className={`${isCollapsed ? "d-none" : "d-block"} `}
                style={{ animation: "all 0.2s" }}
              >
                {item.value}
              </span>
            </Nav.Link>
          );
        })}
      </Nav>
    </div>
  );
};

export default Sidebar;
