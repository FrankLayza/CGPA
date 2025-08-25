import SemesterCharts from "../components/Chart";
import { useAppContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const { preview, calculateCGPA } = useAppContext();
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
              <div>
                <h2 className="text-2xl font-bold">CUMULATIVE GPA</h2>
              </div>
              <div className="flex justify-between items-center mt-5">
                <div>
                  <p className="text-7xl font-extrabold">{calculateCGPA()}</p>
                  <p className="text-3xl font-bold">/5.0</p>
                  <p className="text-xl font-bold">33 TOTAL COURSES</p>
                </div>
                <div className="">
                  <div className="neo-card bg-neo-yellow px-3.5 py-2 my-5">
                    <p className="font-bold">HIGHEST GPA</p>
                    <p className="text-sm font-base">Semester 4</p>
                  </div>
                  <Link
                    to="/calculate"
                    className="bg-neo-yellow neo-button hover:bg-neo-black hover:text-neo-white px-2 py-2 rounded-xl font-bold transition"
                  >
                    Open GPA Calculator
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="neo-card bg-neo-white p-4">
              <h2 className="text-3xl font-bold mb-4">GPA PROGRESS CHART</h2>
              <SemesterCharts /> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
