import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Navbar from "./components/core/Navbar.jsx";
import ReactionTime from "./pages/ReactionTime.jsx";
import MemoryRetention from "./pages/MemoryRetention.jsx";
import VocabularyTester from "./pages/VocabularyTester.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/reaction-time-tester"
          element={
            <Dashboard>
              <ReactionTime />
            </Dashboard>
          }
        />
        <Route
          path="/memory-retention"
          element={
            <Dashboard>
              <MemoryRetention />
            </Dashboard>
          }
        />
        <Route
          path="/vocabulary-tester"
          element={
            <Dashboard>
              <VocabularyTester />
            </Dashboard>
          }
        />
      </Routes>
    </>
  );
}

export default App;
