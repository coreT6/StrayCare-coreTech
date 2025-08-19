// src/context/ReportsContext.jsx
import React, { createContext, useState, useContext } from "react";

const ReportsContext = createContext();

export const ReportsProvider = ({ children }) => {
  const [reports, setReports] = useState([
    {
      id: 1,
      type: "Injured",
      description: "Dog with leg injury",
      photo_url: "https://placekitten.com/300/200",
      location: "Main Street",
    },
    {
      id: 2,
      type: "Stray",
      description: "Homeless cat near market",
      photo_url: "https://placekitten.com/301/200",
      location: "Goa Market",
    },
  ]);

  const addReport = (report) => {
    setReports([{ id: Date.now(), ...report }, ...reports]);
  };

  return (
    <ReportsContext.Provider value={{ reports, addReport }}>
      {children}
    </ReportsContext.Provider>
  );
};

export const useReports = () => useContext(ReportsContext);
