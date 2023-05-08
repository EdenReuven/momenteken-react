import React from "react";
import Filed from "../filedList/filed/Filed";
import "./FieldList.scss";

const FieldList = ({ data }) => {
  return (
    <div className="fieldList">
      {Object.keys(data).map((key) => (
        <Filed key={key} name={key} data={data[key]} />
      ))}
    </div>
  );
};

export default FieldList;
