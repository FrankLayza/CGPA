import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [semesters, setSemester] = useState([
    {
      id: Date.now() + Math.random(),
      name: `Semester 1`,
      rows: [
        {
          id: Date.now() + Math.random(),
          course: "",
          grade: "",
          credit_unit: "",
        },
      ],
      gpa: null,
    },
  ]);
  return (
    <AppContext.Provider value={{ total, setTotal, semesters, setSemester }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
