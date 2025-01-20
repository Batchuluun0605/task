import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// import Sidebar from "./components/Sidebar";

import ResponsiveTable from "./components/ReponsiveTable";
import BeforeAndAfter from "./components/BeforeAndAfter/BeforeAndAfter";
import Grid from "./components/Grid/Grid";
import Text from "./components/Text/Text";
import Img from "./components/Img/Img";
import Sidebar from "./components/sidebar/Sidebar";
import { Button } from "react-bootstrap";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

const data = [
  {
    color: "red",
    value: "#f00",
  },
  {
    color: "green",
    value: "#0f0",
  },
  {
    color: "blue",
    value: "#00f",
  },
  {
    color: "cyan",
    value: "#0ff",
  },
  {
    color: "magenta",
    value: "#f0f",
  },
  {
    color: "yellow",
    value: "#ff0",
  },
  {
    color: "black",
    value: "#000",
  },
];

function App() {
  const [stagedChanges, setStagedChanges] = useState({});
  const [userRoles, setUserRoles] = useState([]);
  const handle = (color, value) => {
    setStagedChanges((prev) => {
      const key = `${color}-${value}`;
      return {
        ...prev,
        [key]: !(
          prev[key] ??
          userRoles.some((ur) => ur.color === color && ur.value === value)
        ),
      };
    });
  };

  const saveChanges = () => {
    for (const [key, value] of Object.entries(stagedChanges)) {
      const [color, value] = key.split("-");
      console.log(color, "and", value);
    }
  };
  saveChanges();
  console.log(stagedChanges);

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ backgroundColor: "black", minWidth: "100vw" }}>
          {data.map(({ color, value }) => (
            <div
              key={color + value}
              onClick={() => handle(color, value)}
              style={{ color: "red" }}
              className="color"
            >
              {color}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
