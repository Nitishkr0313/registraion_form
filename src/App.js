import "./styles.css";
import { useState } from "react";

export default function App() {
  const [objData, setobjData] = useState({});
  const getData = (value, name) => {
    let data = { [name]: value };
    setobjData({ ...objData, ...data });
  };
  console.log(objData);
  const submit = (event) => {
    event.preventDefault();
    console.log(objData);
  };
  return (
    <form onSubmit={submit}>
      <div className="App">
        <h1>Login Form</h1>
        <input
          type="text"
          name="name"
          placeholder="Enter The Name"
          onChange={(event) => getData(event.target.value, event.target.name)}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter The Email Id"
          onChange={(event) => getData(event.target.value, event.target.name)}
        />
        <br />
        <br />
        <input
          type="number"
          name="mobile"
          placeholder="Enter The Valid mobile number"
          onChange={(event) => getData(event.target.value, event.target.name)}
        />
        <br />
        <br />
        <input
          type="number"
          name="age"
          placeholder="Enter The Age"
          onChange={(event) => getData(event.target.value, event.target.name)}
        />
        <br />
        <br />
        <input
          type="date"
          name="birth"
          placeholder="Enter The D.O.B"
          onChange={(event) => getData(event.target.value, event.target.name)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <button type="reset">Reset</button>
      </div>
    </form>
  );
}
