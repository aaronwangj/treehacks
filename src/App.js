import "./App.css";
import Courses from "./screens/Courses";
import Landing from "./screens/Landing";
import ConvexTest from "./screens/ConvexTest";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lessons from "./screens/Lessons";
import LessonCreator from "./screens/LessonCreator";
import Publish from "./screens/Publish";
import User from "./screens/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/creator" element={<LessonCreator />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/user" element={<User />} />
        <Route path="/test" element={<ConvexTest />} />
      </Routes>
    </Router>
  );
}

export default App;
