import { useState } from "react";

const App = () => {
  let [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    fruit: "",
    state: false,
  });

  let InputChange = (prop, val) => {
    setFormData((prevData) => ({
      ...prevData,
      [prop]: val,
    }));
  };

  let formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ maxWidth: "500px", margin: "100px auto" }}>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <form onSubmit={formSubmit}>
        <input
          onChange={(e) => InputChange("fName", e.target.value)}
          type="text"
          placeholder="first name"
          value={formData.fName}
        />
        <input
          onChange={(e) => InputChange("lName", e.target.value)}
          type="text"
          placeholder="last name"
          value={formData.lName}
        />
        <input
          onChange={(e) => InputChange("email", e.target.value)}
          type="email"
          placeholder="email"
          value={formData.email}
        />
        <select onChange={(e) => InputChange("fruit", e.target.value)} value={formData.fruit}>
          <option value="">Choose</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="Pine Apple">Pine Apple</option>
        </select>
        <input
          onChange={() => InputChange("state", true)}
          checked={formData.state === true}
          type="radio"
          name="state"
        />{" "}
        ON
        <input
          onChange={() => InputChange("state", false)}
          checked={formData.state === false}
          type="radio"
          name="state"
        />{" "}
        OFF
        <br />
        <br />
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default App;
