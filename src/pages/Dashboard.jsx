import { useAppContext } from "../contexts/AppContext";
const Dashboard = () => {
  const { preview } = useAppContext();
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
                  <p className="text-7xl font-extrabold">3.85</p>
                  <p className="text-3xl font-bold">/5.0</p>
                  <p className="text-xl font-bold">33 TOTAL COURSES</p>
                </div>
                <div className="neo-card bg-neo-yellow px-3.5 py-2">
                  <p className="font-bold">HIGHEST GPA</p>
                  <p className="text-sm font-base">Semester 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
