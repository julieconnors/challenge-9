import React, { useContext } from "react";
import { FormContext } from "./FormContext";
// This component displays name from Context
const Name = () => {
  const user = useContext(FormContext);
  return (
    <div style={{ marginTop: "30px" }}>
      <h2 className="is-size-4">
        <strong>Name</strong>: {user.name}
      </h2>
    </div>
  );
};

export default Name;
