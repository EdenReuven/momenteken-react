import React from "react";
import "./Form.scss";

const Form = ({ data }) => {
  return (
    <div className="form">
      {Object.keys(data).map((key) => {
        if (typeof data[key] === "object") {
          console.log("more obj");
        } else if (Array.isArray(data[key])) {
          console.log("more Array");
        } else {
          return (
            <div className="filedInput">
              <label htmlFor={key}>{key}</label>
              <input type="text" value={data[key]} id={key} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Form;
