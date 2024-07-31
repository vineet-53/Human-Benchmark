import Dashboard from "./pages/Dashboard.jsx";
import Navbar from "./components/core/Navbar.jsx";
import ReactionTime from "./pages/ReactionTime.jsx";
import MemoryRetention from "./pages/MemoryRetention.jsx";
import VocabularyTester from "./pages/VocabularyTester.jsx";
import Error from "./pages/Error.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/reaction-time-tester" />} />
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
        <Route path={"/*"} element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
