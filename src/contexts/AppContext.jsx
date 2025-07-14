import { useState, createContext, useContext } from "react";

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
    const [rows, setRow] = useState([
      { id: Date.now(), course: "", grade: "", credit_unit: "" },
    ]);

    return (
        <AppContext.Provider value={{rows, setRow}}>{children}</AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext) 
