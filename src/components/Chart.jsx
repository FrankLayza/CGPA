import { useAppContext } from "../contexts/AppContext";
import { BarChart, Bar, ResponsiveContainer, Tooltip, YAxis, XAxis } from "recharts";

const SemesterCharts = () => {
  const { semesters } = useAppContext();

  const chartData = semesters.map((semester) => ({
    semester: semester.name,
    gpa: Number(semester.gpa) || 0,
  }));

  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 20, left: -40, bottom: 20 }}>
          <XAxis dataKey="semester" />
          <YAxis domain={[0, 5]} />
          <Tooltip />
          <Bar dataKey="gpa" fill="#ffd93d" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SemesterCharts;
