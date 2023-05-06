import React from "react";
import Filed from "../filed/Filed";
import './FiledContainer.scss';

const FieldContainer = ({data}) => {
  return (
    <div className="filed_container">
      {Object.keys(data).map((key) => (
        <Filed key={key} name={key} data={data[key]} />
      ))}
    </div>
  );
};

export default FieldContainer;
