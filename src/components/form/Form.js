import React from "react";
import "./Form.scss";
import FieldList from "../filedList/FieldList";
import Filed from "../filedList/filed/Filed";
import { upperCaseLabel, convertToPDF } from "../../utils/function";

const Form = ({ data }) => {
  const handleConvert = () => {
    const form = document.getElementById("formContinuer");
    convertToPDF(form);
  };

  return (
    <div className="form">
      <div className="convertBtn">
        <button onClick={handleConvert} className="convertToPdf">
          convert to PDF
        </button>
      </div>
      <div id="formContinuer">
        {Object.keys(data).map((key) => {
          if (Array.isArray(data[key])) {
            const arrayData = data[key];
            return (
              <div className="fieldContainer">
                <div className="title">{upperCaseLabel(key)}</div>
                {arrayData.map((obj, index) => (
                  <FieldList key={index} data={obj} />
                ))}
              </div>
            );
          } else if (typeof data[key] === "object" && data[key] !== null) {
            let dataObj = data[key];
            return (
              <div className="fieldContainer">
                <div className="title">{upperCaseLabel(key)}</div>
                <FieldList data={dataObj} />
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
    </div>
  );
};

export default Form;
