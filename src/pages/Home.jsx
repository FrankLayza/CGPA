import Calculator from "./Calculator";
import { useAppContext } from "../contexts/AppContext";
import Button from "../components/Button";

const Home = () => {
  const { rows } = useAppContext();

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

    rows.forEach((row) => {
      if (row.grade && row.credit_unit) {
        let point = gradePoints[row.grade];
        let unit = parseFloat(row.credit_unit);
        totalPoints += point * unit;
        totalUnits += unit;
      }
    });
    if (totalUnits > 0) {
      let gpa = totalPoints / totalUnits;
      console.log(gpa.toFixed(2));
    } else {
      return 0;
    }
  };

  return (
    <div className="font-rubik bg-neo-blue min-h-screen mx-auto w-full flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-5xl mx-auto">
        <h2 className="text-4xl text-neo-black font-bold">GPA CALCULATOR</h2>

        <div className=" neo-card px-2 py-1 md:px-3 md:py-2 mt-10">
          <Calculator />
        </div>
        {rows.length >= 2 ? (
          <div className="flex justify-center mt-5 gap-4">
            <Button
              onClick={calculateTotal}
              classname="neo-button py-1 px-3 md:px-3 md:py-2 cursor-pointer"
            >
              Calculate
            </Button>
            <Button classname="neo-button py-1 px-3 md:px-3 md:py-2 cursor-pointer">
              Add Semester
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
