import React from "react";
import "./Form.scss";
import Filed from "../filed/Filed";
import FieldContainer from "../fieldContainer/FieldContainer";

const Form = ({ data }) => {
  return (
    <div className="form">
      {Object.keys(data).map((key) => {
        if (Array.isArray(data[key])) {
          const newArr = data[key];
          return (
            <>
              <h1>{key}</h1>

              {newArr.map((obj, index) => (
                <FieldContainer key={index} data={obj} />
              ))}
            </>
          );
        } else if (typeof data[key] === "object" && data[key] !== null) {
          let newObj = data[key];
          return (
            <>
              <h1>{key}</h1>
              <FieldContainer data={newObj} />
            </>
          );
        } else {
          return (
            <div className="filed_container">
              <Filed key={key} data={data[key]} name={key} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Form;
