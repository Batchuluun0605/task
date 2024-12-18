import "./index.css";
const BeforeAndAfter = () => {
  return (
    <div className="container-div">
      <div>
        <h1>Hello world</h1>
      </div>
      <h2>Ordered List Redesign</h2>
      <ol>
        <li>set the list-style to none</li>
        <li>create a new counter using counter-reset</li>
        <li>use counter-increment on the list-items</li>
        <li>style your own ::before element</li>
        <li>use absolute positioning</li>
      </ol>
      <button className="before-btn">Hover me</button>
    </div>
  );
};

export default BeforeAndAfter;
