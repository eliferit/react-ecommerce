import React, { createContext } from "react";
import data from "../Components/Assets/data";

export const DataContext = createContext(null);

const DataContextProvider = (props) => {

  const contextValue = {
    data
  };

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
