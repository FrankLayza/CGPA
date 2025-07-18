import { Trash2 } from "lucide-react";
const CourseRow = ({onChange, semId, row, idx, onRemove}) => {
    return ( 
        <>
            <div className="flex justify-evenly items-center gap-2 w-full">
                <input
                  id="course"
                  type="text"
                  value={row.course}
                  className="neo-input flex-1 min-w-[100px] my-1 px-2 md:px-3 md:py-2 uppercase"
                  onChange={(e) =>
                    onChange(semId, idx, "course", e.target.value)
                  }
                  required
                />
                <select
                  id="grade"
                  value={row.grade}
                  className="neo-select flex-1 min-w-[100px] my-1 mx-2 py-0.5 px-2 md:px-3 md:py-2.5"
                  onChange={(e) =>
                    onChange(semId, idx, "grade", e.target.value)
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
                    onChange(
                      semId,
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
                  onClick={() => onRemove(semId, row.id)}
                />
            </div>
        </>
     );
}
 
export default CourseRow;