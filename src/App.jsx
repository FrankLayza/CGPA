import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-neo-blue font-rubik min-h-screen">
        <Routes>
          <Route path="/calculate" element={<Home />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
