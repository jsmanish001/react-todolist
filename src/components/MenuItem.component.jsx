import React, { useState } from "react";
import "./MenuItem.style.css";

function MenuItem(props) {
  const [styleValue, setStyleValue] = useState(false);

  function handleListStyle(e) {
    // styleValue ? setStyleValue(false) : setStyleValue(true);
    setStyleValue(prevValue => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleListStyle}>
      <li className={styleValue ? `text` : `none`}>{props.item}</li>
    </div>
  );
}

export default MenuItem;
