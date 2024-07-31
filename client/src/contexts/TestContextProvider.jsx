import { createContext, useContext } from "react";
import useStartTest from "../hooks/useStartTest";
const TestContext = createContext(null);

export default function TestContextProvider({ children }) {
  const { test, handleStop, handleStart } = useStartTest(false);
  return (
    <TestContext.Provider value={{ test, handleStart, handleStop }}>
      {children}
    </TestContext.Provider>
  );
}
export function useTestContext() {
  return useContext(TestContext);
}
