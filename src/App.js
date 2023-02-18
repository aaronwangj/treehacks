import "./App.css";
import Landing from "./screens/Landing";
import Dashboard from "./screens/Dashboard";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div class="width">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
