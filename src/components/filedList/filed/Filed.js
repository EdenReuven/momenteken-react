import React, { useState } from "react";
import "./Filed.scss";
import { upperCaseLabel } from "../../../utils/function";

const Filed = ({ name, data }) => {
  const [input, setInput] = useState(data || "");
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="filedInput">
      <label htmlFor={name}>{upperCaseLabel(name)}</label>
      <input type="text" value={input} id={name} onChange={handleInput} />
    </div>
  );
};

export default Filed;
