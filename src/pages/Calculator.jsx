
import Button from "../components/Button";
import { useAppContext } from "../contexts/AppContext";
import { useCallback } from "react";
import SemesterCard from "../components/SemesterCard";

const Calculator = () => {
  const { semester, setSemester, setTotal } = useAppContext();
  const addNewRow = useCallback(
    (semesterId) => {
      setSemester((prev) =>
        prev.map((sem) => {
          if (sem.id === semesterId) {
            // 🛡️ Guard against empty rows
            if (sem.rows.length === 0) {
              const empty = {
                id: Date.now() + Math.random(),
                course: "",
                grade: "",
                credit_unit: "",
              };
              return {
                ...sem,
                rows: [empty],
              };
            }

            const lastRow = sem.rows.at(-1);

            if (!lastRow.course.trim()) {
              window.alert("Please enter a course name");
              return sem;
            }
            if (!lastRow.grade.trim()) {
              window.alert("Please enter a grade");
              return sem;
            }
            if (!lastRow.credit_unit.trim()) {
              window.alert("Please enter a credit unit");
              return sem;
            }

            const empty = {
              id: Date.now() + Math.random(),
              course: "",
              grade: "",
              credit_unit: "",
            };

            return {
              ...sem,
              rows: [...sem.rows, empty],
            };
          }
          return sem;
        })
      );
    },
    [setSemester]
  );

  const removeRow = (semesterId, rowId) => {
    setSemester((prev) =>
      prev.map((sem) =>
        sem.id === semesterId
          ? { ...sem, rows: sem.rows.filter((row) => row.id !== rowId) }
          : sem
      )
    );
  };
  const removeAllRows = (semesterId) => {
    setSemester((prev) =>
      prev.map((sem) =>
        sem.id === semesterId
          ? {
              ...sem,
              rows: [
                {
                  id: Date.now() + Math.random(),
                  course: "",
                  grade: "",
                  credit_unit: "",
                },
              ],
            }
          : sem
      )
    );
  };
  const handleInputChange = (semesterId, rowIdx, field, value) => {
    setSemester((prev) =>
      prev.map((sem) =>
        sem.id === semesterId
          ? {
              ...sem,
              rows: sem.rows.map((row, i) =>
                i === rowIdx ? { ...row, [field]: value } : row
              ),
            }
          : sem
      )
    );
  };

  const newSemester = () => {
    setSemester((prev) => {
      const nextNumber = prev.length + 1;

      const empty = {
        id: Date.now() + Math.random(),
        name: `Semester ${nextNumber}`,
        rows: [
          {
            id: Date.now() + Math.random(),
            course: "",
            grade: "",
            credit_unit: "",
          },
        ],
        gpa: null,
      };

      return [...prev, empty];
    });
  };

  const gradePoints = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
    E: 1,
    F: 0,
  };

  const calculateTotal = (semesterId) => {
    let totalPoints = 0;
    let totalUnits = 0;

    const currentSemester = semester.find((sem) => sem.id === semesterId);

    currentSemester.rows.forEach((row) => {
      if (row.grade && row.credit_unit) {
        let point = gradePoints[row.grade];
        let unit = parseFloat(row.credit_unit);
        totalPoints += point * unit;
        totalUnits += unit;
      }
    });

    if (totalUnits > 0) {
      let gpa = totalPoints / totalUnits;

      setSemester((prev) =>
        prev.map((sem) =>
          sem.id === semesterId ? { ...sem, gpa: gpa.toFixed(2) } : sem
        )
      );

      setTotal(gpa.toFixed(2));
      console.log(gpa.toFixed(2));
    } else {
      return 0;
    }
  };

  return (
    <>
      <>
        {semester.map((sem) => (
          <>
            <SemesterCard
              key={sem.id}
              sem={sem}
              onAddRow={addNewRow}
              onInputChange={handleInputChange}
              onRemoveAllRows={removeAllRows}
              onRemoveRow={removeRow}
            />

            <div className="flex justify-center mt-5 gap-4">
              <Button
                onClick={() => calculateTotal(sem.id)}
                classname="neo-button py-1 px-3 md:px-3 md:py-2 cursor-pointer"
              >
                Calculate
              </Button>
            </div>
          </>
        ))}

        {/* This goes outside the loop */}
        {semester.at(-1).rows.length >= 2 && (
          <div className="flex justify-center mt-5 gap-4">
            <Button
              onClick={newSemester}
              classname="neo-button py-1 px-3 md:px-3 md:py-2 cursor-pointer"
            >
              Add Semester
            </Button>
          </div>
        )}
      </>
    </>
  );
};

export default Calculator;
