import React from "react";
import "./Input.css";
function Input({ onChange }) {
  return (
    <div className="input">
      <input
        style={{ width: 200, height: 30, fontSize: 20 }}
        type="text"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default Input;
