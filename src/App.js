import "./App.css";
import Landing from "./screens/Landing";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="w-full h-full bg-red-400">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
