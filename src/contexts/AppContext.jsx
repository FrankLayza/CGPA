import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [preview, setPreview] = useState({
    username: '',
    img : null,
  })
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
   const calculateCGPA = () => {
  let totalGPA = 0;
  let count = 0;

  semesters.forEach((semester) => {
    if (semester.gpa) {
      let eachSemesterGPA = parseFloat(semester.gpa);
      totalGPA += eachSemesterGPA;
      count++;
    }
  });

  if (count === 0) return 0;

  const cgpa = (totalGPA / count).toFixed(2);
  return cgpa;
};

const getTotalCourses = (semesters) => {
  return semesters.reduce((total, semester) => {
    const validCourses = semester.rows.filter(
      (row) => row.course && row.course.trim() !== ""
    );
    return total + validCourses.length;
  }, 0);
};


  return (
    <AppContext.Provider value={{ total, setTotal, semesters, setSemester, preview, setPreview, calculateCGPA, getTotalCourses }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
