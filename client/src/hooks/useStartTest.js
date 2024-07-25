import { useState, useEffect } from "react";
export default function useStartTest({ initTestState }) {
  const [test, setTest] = useState(initTestState);
  const handleStart = () => {
    setTest(true);
  };
  const handleStop = () => {
    setTest(false);
  };
  useEffect(() => {
    setTest(false);
  }, []);
  return { test, handleStop, handleStart };
}
