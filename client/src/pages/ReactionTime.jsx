import { pages } from "../data/pages.data";
import ReactionTimeTest from "../components/core/ReactionTimePage/ReactionTimeTest.jsx";
import TestPage from "../components/core/Templates/TestPage.jsx";
import TestContextProvider from "../contexts/TestContextProvider.jsx";
export default function ReactionTime() {
  const data = pages.data[0];

  return (
    <TestContextProvider>
      <TestPage data={{ ...data }}>
        <ReactionTimeTest />
      </TestPage>
    </TestContextProvider>
  );
}
