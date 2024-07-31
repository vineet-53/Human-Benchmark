import { useEffect, useState } from "react";
import { pages } from "../data/pages.data";
import TestPage from "../components/core/Templates/TestPage.jsx";
import VocabularyTest from "../components/core/VocabularyTesterPage/VocabularyTest.jsx";
import TestContextProvider from "../contexts/TestContextProvider.jsx";

export default function VocabularyTester() {
  const data = pages.data[2];
  return (
    <TestContextProvider>
      <TestPage data={{ ...data }} startButton={true}>
        <VocabularyTest />
      </TestPage>
    </TestContextProvider>
  );
}
