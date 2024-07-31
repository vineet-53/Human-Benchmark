import { useTestContext } from "../../../contexts/TestContextProvider";
import TestTemplate from "./TestTemplate";

export default function TestPage({ data, children, startButton = false }) {
  const { icon, title, desc } = data;
  const { test, handleStop, handleStart } = useTestContext();
  if (test) {
    return children;
  }
  return (
    <TestTemplate
      onClick={handleStart}
      icon={data.icon}
      title={data.title}
      startButton={startButton}
      desc={data.desc}
    />
  );
}
