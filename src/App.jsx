import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<Layout />}>
        <Route path="/calculate" element={<Home />} />
        <Route path="/home" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<NotFound />}/>
      <Route path="/" element={<SignUp />} />
    </Routes>
  );
}

export default App;
