import "./App.css";
import Courses from "./screens/Courses";
import Landing from "./screens/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lessons from "./screens/Lessons";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/lessons" element={<Lessons />} />
      </Routes>
    </Router>
  );
}

export default App;
