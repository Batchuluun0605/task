import { useState } from "react";

const Sidebar = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };
  return (
    <div
      className={`d-block flex-column  text-white bg-dark min-w-100  position-sticky overflow-visible ${
        isCollapse ? "p-0" : "p-3"
      }`}
      style={{ width: isCollapse ? "70px" : "280px", height: "1000px" }}
    >
      <a
        href="/"
        className={`d-flex align-items-center gap-3 mb-3 mb-md-0 me-md-auto text-white text-decoration-none ${
          isCollapse ? "mx-auto py-2" : ""
        }`}
      >
        <i class={`bi bi-bootstrap fs-5 `}></i>

        <span class={isCollapse ? "d-none" : "d-block"}>Sidebar</span>
      </a>
      <hr />
      <ul class="nav nav-pills  flex-column mb-auto">
        <li class="nav-item">
          <a
            href="#"
            class={`nav-link active d-flex align-items-center gap-3  ${
              isCollapse ? "justify-content-center " : ""
            } `}
            aria-current="page"
            title="Home"
          >
            <i class="bi bi-house fs-4"></i>
            <span className={isCollapse ? "d-none" : "d-block"}>Home</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class={`nav-link  d-flex align-items-center gap-3  ${
              isCollapse ? "justify-content-center " : ""
            } `}
          >
            <i class="bi bi-speedometer2 fs-4"></i>
            <span className={isCollapse ? "d-none" : "d-block"}>Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class={`nav-link  d-flex align-items-center gap-3  ${
              isCollapse ? "justify-content-center " : ""
            } `}
          >
            <i class="bi bi-table fs-4"></i>
            <span className={isCollapse ? "d-none" : "d-block"}>Orders</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class={`nav-link  d-flex align-items-center gap-3  ${
              isCollapse ? "justify-content-center  " : ""
            } `}
          >
            <i class="bi bi-columns fs-4"></i>
            <span className={isCollapse ? "d-none" : "d-block"}>Products</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class={`nav-link  d-flex align-items-center gap-3  ${
              isCollapse ? "justify-content-center " : ""
            } `}
          >
            <i class="bi bi-person-circle fs-4"></i>
            <span className={isCollapse ? "d-none" : "d-block"}>Customers</span>
          </a>
        </li>
      </ul>
      <hr />
      <div class="dropdown mb-2">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong className={isCollapse ? "d-none" : "d-block"}>mdo</strong>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a class="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>

      <i
        className="bi bi-arrow-left-circle-fill position-absolute top-5 text-success  z-3 fs-4"
        style={{ right: "-10px" }}
        onClick={handleCollapse}
      ></i>
    </div>
  );
};

export default Sidebar;
