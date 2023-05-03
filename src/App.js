import "./styles/App.scss";
import data from "./utils/example.json";
import Form from "./components/form/Form";
// import { useEffect, useState } from "react";

function App() {
  // const [formData, setFormData] = useState();
  // useEffect(() => {
  //   const newData = Object.keys(data).map((key) => {
  //     return data[key];
  //  })

  //  setFormData(newData);
  //   // setFormData(
  //   //   Object.entries(data).map((filed) => ({ [filed[0]]: filed[1] }))
  //   // );
  // }, []);

  return (
    <div>
      <h1>טופס - רישומי זיהוי</h1>
      <Form data={data} />
    </div>
  );
}

export default App;
