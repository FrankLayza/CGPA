import { Trash2 } from "lucide-react";
import Button from "../components/Button";
import { useAppContext } from "../contexts/AppContext";
import { useCallback } from "react";

const Calculator = () => {
  const { semester, setSemester, setTotal } = useAppContext();
  const addNewRow = useCallback(
    (semesterId) => {
      setSemester((prev) =>
        prev.map((sem) => {
          if (sem.id === semesterId) {
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
              return prev;
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
      prev.map((sem) => {
        if (sem.id === semesterId) {
          return {
            ...sem,
            rows: [
              {
                id: Date.now() + Math.random(),
                course: "",
                grade: "",
                credit_unit: "",
              },
            ],
          };
        }
      })
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

  const calculateTotal = () => {
    let totalPoints = 0;
    let totalUnits = 0;
    let currentSemester = semester.at(-1);
    currentSemester.rows.forEach((row) => {
      if (row.grade && row.credit_unit) {
        let point = gradePoints[row.grade];
        let unit = parseFloat(row.credit_unit);
        totalPoints += point * unit;
        totalUnits += unit;
      }
    });
    if (totalUnits > 0) {
      let currentSemesterGPA = totalPoints / totalUnits;
      setSemester((prev) =>
        prev.map((sem) =>
          sem.id === currentSemester.id
            ? { ...sem, gpa: currentSemesterGPA.toFixed(2) }
            : sem
        )
      );
      setTotal(currentSemesterGPA.toFixed(2));
      console.log(currentSemester.gpa);
    } else {
      return 0;
    }
  };

  return (
    <>
      {semester.map((sem, id) => (
        <div key={id}>
          <div className="bg-neo-white neo-card px-2 py-1 md:px-3 md:py-2 mt-10">
            <h2 className="neo-subtitle self-start text-2xl text-neo-black">
              {sem.name}
            </h2>
            <div className="flex justify-evenly items-center w-full mt-5 font-bold text-[#ff6b6b] md:text-lg">
              <h3 className="flex-1 min-w-[100px] text-center">Course Name</h3>
              <h3 className="flex-1 min-w-[100px] text-center">Grade</h3>
              <h3 className="flex-1 min-w-[100px] text-center">Credits</h3>
              <div className="w-6 h-6" /> {/* Placeholder for icon alignment */}
            </div>
            {sem.rows.map((row, idx) => (
              <div
                key={row.id}
                className="flex justify-evenly items-center gap-2 w-full"
              >
                <input
                  id="course"
                  type="text"
                  value={row.course}
                  className="neo-input flex-1 min-w-[100px] my-1 px-2 md:px-3 md:py-2 uppercase"
                  onChange={(e) =>
                    handleInputChange(sem.id, idx, "course", e.target.value)
                  }
                  required
                />
                <select
                  id="grade"
                  value={row.grade}
                  className="neo-select flex-1 min-w-[100px] my-1 mx-2 py-0.5 px-2 md:px-3 md:py-2.5"
                  onChange={(e) =>
                    handleInputChange(sem.id, idx, "grade", e.target.value)
                  }
                  required
                >
                  <option
                    value=""
                    defaultValue={"Pick your Grade"}
                    disabled={true}
                  >
                    Pick your Grade
                  </option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
                <input
                  id="credit"
                  value={row.credit_unit}
                  min={1}
                  max={5}
                  type="number"
                  className="neo-input flex-1 min-w-[100px] my-1 px-2 md:px-3 md:py-2"
                  placeholder="1-5"
                  onChange={(e) => {
                    handleInputChange(
                      sem.id,
                      idx,
                      "credit_unit",
                      e.target.value
                    );
                  }}
                  required
                />
                <Trash2
                  strokeWidth={2}
                  size={26}
                  className="cursor-pointer text-neo-red"
                  onClick={() => removeRow(sem.id, row.id)}
                />
              </div>
            ))}
            {sem.gpa !== null ? (
              <div className="my-2 flex items-center">
                <p className="self-end">
                  {sem.name} GPA:{" "}
                  <span className="font-bold text-2xl">{sem.gpa}</span>
                </p>
              </div>
            ) : (
              <div className="flex justify-center mt-4 mb-2 gap-2">
                <Button
                  onClick={() => {
                    addNewRow(sem.id);
                  }}
                  classname="neo-button bg-neo-yellow py-1 px-3 md:px-3 md:py-2 cursor-pointer"
                >
                  Add Course
                </Button>
                <Button
                  onClick={() => {
                    removeAllRows(sem.id);
                  }}
                  classname="neo-button bg-neo-red py-1 px-3 md:px-3 md:py-2 cursor-pointer"
                >
                  Clear All
                </Button>
              </div>
            )}
          </div>
          {semester[0].rows.length >= 2 ? (
            <div className="flex justify-center mt-5 gap-4">
              <Button
                onClick={calculateTotal}
                classname="neo-button py-1 px-3 md:px-3 md:py-2 cursor-pointer"
              >
                Calculate
              </Button>
              <Button
                onClick={() => {
                  newSemester();
                }}
                classname="neo-button py-1 px-3 md:px-3 md:py-2 cursor-pointer"
              >
                Add Semester
              </Button>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
};

export default Calculator;
