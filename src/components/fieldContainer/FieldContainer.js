import React from "react";
import Filed from "../filed/Filed";

const FieldContainer = ({data}) => {
  return (
    <div>
      {Object.keys(data).map((key) => (
        <Filed key={key} name={key} data={data[key]} />
      ))}
    </div>
  );
};

export default FieldContainer;
