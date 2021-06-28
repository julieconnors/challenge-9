import React, { useContext } from "react";
import { FormContext } from "./FormContext";
// This component displays location from context
const Location = () => {
  const location = useContext(FormContext);
  return (
    <div>
      {/* Display user's location from Context */}
      <h2 className="is-size-4">
        <strong>Location</strong>: {location.location}
      </h2>
    </div>
  );
};

export default Location;
