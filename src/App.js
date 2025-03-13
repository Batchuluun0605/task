import React from "react";

const HorizontalScroll = () => {
  let str = " sdsd  Mr Blue   has   a     blue";
  let result = str.replace(/\s+/g, " ").trim();
  console.log(result);
  return (
    <div className="horizontal-scroll-container">
      <div className="scroll-item">Item 1</div>
      <div className="scroll-item">Item 2</div>
      <div className="scroll-item">Item 3</div>
      <div className="scroll-item">Item 4</div>
      <div className="scroll-item">Item 5</div>
      <div className="scroll-item">Item 6</div>
      <div className="scroll-item">Item 7</div>
    </div>
  );
};

export default HorizontalScroll;
