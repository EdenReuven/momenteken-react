import React from "react";
import "./Form.scss";
import FieldList from "../filedList/FieldList";
import Filed from "../filed/Filed";
//import ConvertButton from "../convertButton/ConvertButton";

const Form = ({ data }) => {
  const handleConvert = (e) => {};
  return (
    <div className="form">
       <div className="convertBtn">
        <button onClick={handleConvert} className="convertToPdf">
          convert to pdf
        </button>
      </div>
      {Object.keys(data).map((key) => {
        if (Array.isArray(data[key])) {
          const newArr = data[key];
          return (
            <div className="fieldContainer">
              <h1>{key.split("_").join(' ')}</h1>
              {newArr.map((obj, index) => (
                <FieldList key={index} data={obj} />
              ))}
            </div>
          );
        } else if (typeof data[key] === "object" && data[key] !== null) {
          let newObj = data[key];
          return (
            <div className="fieldContainer">
              <h1>{key.split("_").join(' ')}</h1>
              <FieldList data={newObj} />
            </div>
          );
        } else {
          return (
            <div className="fieldContainer">
              <Filed key={key} data={data[key]} name={key} />
            </div>
          );
        }
      })}
     
    </div>
  );
};

export default Form;
