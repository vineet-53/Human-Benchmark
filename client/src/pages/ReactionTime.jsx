import { useEffect, useState } from "react";
import { pages } from "../data/pages.data";
import ReactionTimeTest from "../components/core/ReactionTimePage/ReactionTimeTest.jsx";
import TestPage from "../components/core/Templates/TestPage.jsx";
export default function ReactionTime() {
  const data = pages.data[0];
  return (
    <TestPage data={{ ...data }}>
      <ReactionTimeTest />
    </TestPage>
  );
}
