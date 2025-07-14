import { Trash2 } from "lucide-react";
import Button from "../components/Button";
import { useAppContext } from "../contexts/AppContext";
import { useCallback } from "react";

const Calculator = () => {
  const { rows, setRow } = useAppContext();

  const addNewRow = useCallback(() => {
    const lastRow = rows[rows.length - 1];
    if (!lastRow.course.trim()) {
      window.alert("Please enter a course name");
      return;
    }

    const empty = {
      id: Date.now() + Math.random(),
      course: "",
      grade: "",
      credit_unit: "",
    };

    setRow((prev) => [...prev, empty]); 
  }, [rows]);
  
  const removeRow = (id) => {
    setRow(rows.filter((row) => row.id !== id));
  };
  const removeAllRows = () => {
    setRow([{ course: "", grade: "", credit_unit: "" }]);
  };
  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRow(newRows);
  };

  return (
    <>
      <div>
        <div className="bg-neo-white">
          <h2 className="neo-subtitle self-start text-2xl text-neo-black">
            Semester I
          </h2>
          <div className="flex justify-evenly items-center w-full mt-5 font-bold text-[#ff6b6b] md:text-lg">
            <h3 className="flex-1 min-w-[100px] text-center">Course Name</h3>
            <h3 className="flex-1 min-w-[100px] text-center">Grade</h3>
            <h3 className="flex-1 min-w-[100px] text-center">Credits</h3>
            <div className="w-6 h-6" /> {/* Placeholder for icon alignment */}
          </div>
          {rows.map((row, idx) => (
            <div
              key={row.id}
              className="flex justify-evenly items-center gap-2 w-full"
            >
              <input
                type="text"
                value={row.course}
                className="neo-input flex-1 min-w-[100px] my-1 px-2 md:px-3 md:py-2 uppercase"
                onChange={(e) =>
                  handleInputChange(idx, "course", e.target.value)
                }
                required
              />
              <select
                value={row.grade}
                className="neo-select flex-1 min-w-[100px] my-1 mx-2 py-0.5 px-2 md:px-3 md:py-2.5"
                onChange={(e) =>
                  handleInputChange(idx, "grade", e.target.value)
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
                value={row.credit_unit}
                min={1}
                max={5}
                type="number"
                className="neo-input flex-1 min-w-[100px] my-1 px-2 md:px-3 md:py-2"
                placeholder="1-5"
                onChange={(e) => {
                  handleInputChange(idx, "credit_unit", e.target.value);
                }}
                required
              />
              <Trash2
                strokeWidth={2}
                size={26}
                className="cursor-pointer text-neo-red"
                onClick={() => removeRow(row.id)}
              />
            </div>
          ))}
          <div className="flex justify-center mt-4 mb-2 gap-2">
            <Button
              onClick={addNewRow}
              classname="neo-button bg-neo-yellow py-1 px-3 md:px-3 md:py-2 cursor-pointer"
            >
              Add Course
            </Button>
            <Button
              onClick={removeAllRows}
              classname="neo-button bg-neo-red py-1 px-3 md:px-3 md:py-2 cursor-pointer"
            >
              Clear All
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
