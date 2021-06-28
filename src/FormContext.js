import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [name, setName] = useState("William");
  const [location, setLocation] = useState("Mars");

  return (
    <FormContext.Provider value={{ name, location, setName, setLocation }}>
      {children}
    </FormContext.Provider>
  );
};
