import SemesterCharts from "../components/Chart";
import { useAppContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const { preview, calculateCGPA, getTotalCourses, semesters } =
    useAppContext();
  return (
    <>
      <div className="w-full min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-neo-black mb-4 font-black text-4xl">
              HELLO {preview?.name} 🙌
            </h2>
            <p className="text-xl font-bold text-neo-black">
              Track your academic performance across semesters
            </p>
          </div>

          <div className="mb-12">
            <div className="neo-card bg-neo-white p-4">
              {/* Title */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">
                  CUMULATIVE GPA
                </h2>
              </div>

              {/* GPA + Sidebar */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-5 gap-6">
                {/* Left section: GPA + total courses */}
                <div className="text-center md:text-left">
                  <p className="text-5xl md:text-7xl font-extrabold">
                    {calculateCGPA()}
                  </p>
                  <p className="text-2xl md:text-3xl font-bold">/5.0</p>
                  <p className="text-lg md:text-xl font-bold">
                    {getTotalCourses(semesters)} TOTAL COURSES
                  </p>
                </div>

                {/* Right section: Highest GPA + button */}
                <div className="flex flex-col items-center md:items-end gap-4">
                  <div className="neo-card bg-neo-yellow px-4 py-3 w-full md:w-auto text-center md:text-right">
                    <p className="font-bold">HIGHEST GPA</p>
                    <p className="text-sm">Semester 4</p>
                  </div>

                  <Link
                    to="/calculate"
                    className="bg-neo-yellow neo-button hover:bg-neo-black hover:text-neo-white px-4 py-2 rounded-xl font-bold transition w-full md:w-auto text-center"
                  >
                    Open GPA Calculator
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="neo-card bg-neo-white p-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
                GPA PROGRESS CHART
              </h2>
              <div className="w-full overflow-x-auto">
                <SemesterCharts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
