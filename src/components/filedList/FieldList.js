import React from "react";
import Filed from "../filed/Filed";
import './FieldList.scss';

const FieldList = ({data}) => {
  return (
    <div className="fieldList">
      {Object.keys(data).map((key) => (
        <Filed key={key} name={key.split("_").join(' ')} data={data[key]} />
      ))}
    </div>
  );
};

export default FieldList;
