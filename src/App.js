import "./App.css";
import Courses from "./screens/Courses";
import Landing from "./screens/Landing";
import ConvexTest from "./screens/ConvexTest";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/test" element={<ConvexTest />} />
      </Routes>
    </Router>
  );
}

export default App;
