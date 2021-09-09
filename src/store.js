import React, { useState, createContext, useContext } from 'react';

const ConditionsContext = createContext({
  conditions: {},
  setConditions: () => {},
});

const ConditionsProvider = ({ children }) => {
  const [conditions, setConditions] = useState({});

  return (
    <ConditionsContext.Provider value={{ conditions, setConditions }}>
      {children}
    </ConditionsContext.Provider>
  );
};

const useConditions = () => useContext(ConditionsContext);

export { ConditionsProvider, useConditions };
