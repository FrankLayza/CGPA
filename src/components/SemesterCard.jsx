import CourseRow from "./CourseRow";
import Button from "./Button";
const SemesterCard = ({
  sem,
  onAddRow,
  onRemoveAllRows,
  onInputChange,
  onRemoveRow,
}) => {
  return (
    <>
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
          <CourseRow
            key={row.id}
            row={row}
            onChange={onInputChange}
            onRemove={onRemoveRow}
            idx={idx}
            semId={sem.id}
          />
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
                onAddRow(sem.id);
              }}
              classname="neo-button bg-neo-yellow py-1 px-3 md:px-3 md:py-2 cursor-pointer"
            >
              Add Course
            </Button>
            <Button
              onClick={() => {
                onRemoveAllRows(sem.id);
              }}
              classname="neo-button bg-neo-red py-1 px-3 md:px-3 md:py-2 cursor-pointer"
            >
              Clear All
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default SemesterCard;
