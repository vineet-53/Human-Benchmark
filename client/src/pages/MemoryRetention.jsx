import { useEffect, useState } from "react";
import { pages } from "../data/pages.data";
import TestPage from "../components/core/Templates/TestPage.jsx";
import MemoryRetentionTest from "../components/core/MemoryRetentionPage/MemoryRententionTest.jsx";
import TestContextProvider from "../contexts/TestContextProvider.jsx";
export default function MemoryRetention() {
  const data = pages.data[1];
  return (
    <TestContextProvider>
      <TestPage data={{ ...data }} startButton={true}>
        <MemoryRetentionTest />
      </TestPage>
    </TestContextProvider>
  );
}
