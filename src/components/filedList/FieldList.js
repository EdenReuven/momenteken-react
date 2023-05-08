import React from "react";
import Filed from "../filed/Filed";
import "./FieldList.scss";
import { upperCaseLabel } from "../../utils/function";

const FieldList = ({ data }) => {
  return (
    <div className="fieldList">
      {Object.keys(data).map((key) => (
        <Filed key={key} name={upperCaseLabel(key)} data={data[key]} />
      ))}
    </div>
  );
};

export default FieldList;
