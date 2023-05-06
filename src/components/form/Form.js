import React from "react";
import "./Form.scss";
import Filed from "../filed/Filed";
import FieldContainer from "../fieldContainer/FieldContainer";
import ConvertButton from "../convertButton/ConvertButton";

const Form = ({ data }) => {
  const handleConvert=(e)=>{

  }
  return (
    <div className="form">
        {Object.keys(data).map((key) => {
          if (Array.isArray(data[key])) {
            const newArr = data[key];
            return (
              <div className="fieldContainer">
                <h1>{key}</h1>
                {newArr.map((obj, index) => (
                  <FieldContainer key={index} data={obj} />
                ))}
              </div>
            );
          } else if (typeof data[key] === "object" && data[key] !== null) {
            let newObj = data[key];
            return (
              <div className="fieldContainer">
                <h1>{key}</h1>
                <FieldContainer data={newObj} />
              </div>
            )
          } else {
            return (
              <div className="fieldContainer">
                <Filed key={key} data={data[key]} name={key} />
              </div>
            );
          }
        })}
        <div>
        <button onClick={handleConvert} className='convertToPdf'>convert to pdf</button>
    </div>
      </div>
  );
};

export default Form;
