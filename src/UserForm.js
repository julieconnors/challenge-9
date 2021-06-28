import React, { useContext } from "react";
import { FormContext } from "./FormContext";

const Form = () => {
  const user = useContext(FormContext);
  return (
    <div className="user-form">
      {/* Change user's name in context */}
      <div className="input-item">
        <label className="label">Update Name: </label>
        <input
          className="input"
          onChange={(event) => user.setName(event.target.value)}
        />
      </div>

      {/* Change user's location in context */}
      <div className="input-item">
        <label className="label">Update Location: </label>
        <input
          className="input"
          onChange={(event) => user.setLocation(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Form;
