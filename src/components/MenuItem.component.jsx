import React from "react";
import "./MenuItem.style.css";

function MenuItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.item}</li>
    </div>
  );
}

export default MenuItem;
