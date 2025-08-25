import { useAppContext } from "../contexts/AppContext";
import { BarChart, Bar, ResponsiveContainer, Tooltip, YAxis, XAxis } from "recharts";
const SemesterCharts = () => {
  const { semesters } = useAppContext();
  const chartData = semesters.map((semester) => ({
    semester: semester.name,
    gpa: Number(semester.gpa) || 0,
  }));
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart width={150} height={50} data={chartData}>
        <XAxis dataKey='semester' />
        <YAxis />
        <Tooltip />
        <Bar dataKey="gpa" fill="#ffd93d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SemesterCharts;
