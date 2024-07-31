import { useEffect, useRef, useState } from "react";
import PageTestContainer from "../../common/Pages/PageTestContainer";

export default function MemoryRetentionTest() {
  const resetCards = (value) => {
    return Array.from({ length: 3 }, () => {
      return Array.from({ length: 3 }, () => value);
    });
  };
  const [level, setLevel] = useState(1);
  const [reveal, setReveal] = useState(resetCards(false));
  const [answers, setAnswers] = useState([]);
  const [index, setIndex] = useState(0);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const highlightDivRef = useRef(null);
  const dehighlightRef = useRef(null);
  const correctIndex = useRef(0);
  const cardsRef = useRef(resetCards(null));
  const enableButtonRef = useRef(false);
  //functions
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 2) + 1;
  };

  const giveRandomChosenDiv = () => {
    const rowIndex = generateRandomNumber();
    const colIndex = generateRandomNumber();
    return [rowIndex, colIndex];
  };

  const highlightDiv = () => {
    if (index < answers.length) {
      let [row, col] = answers[index];
      if (row && col) {
        highlightDivRef.current = setTimeout(() => {
          cardsRef.current[row][col].style.backgroundColor = "#EAF5FF";
        }, 300);
        dehighlightRef.current = setTimeout(() => {
          cardsRef.current[row][col].style.backgroundColor = "";
          setIndex((prev) => prev + 1);
        }, 1500);
      }
    }
  };

  const fillAnswers = () => {
    setAnswers((prev) => {
      prev.push(giveRandomChosenDiv());
      return prev;
    });
  };

  const proceedToNextLevel = () => {
    setLevel((prev) => prev + 1);
    setIndex(0);
    correctIndex.current = 0;
    setWin(false);
    clearInterval(highlightDivRef.current);
    clearInterval(dehighlightRef.current);
    enableButtonRef.current = false;
    setLose(false);
  };
  const resetGame = () => {
    setIndex(0);
    setLevel(1);
    correctIndex.current = 0;
    setWin(false);
    clearInterval(highlightDivRef.current);
    setLose(false);
    setAnswers(() => []);
    enableButtonRef.current = false;
  };

  const checkAnswerPattern = (rowIndex, colIndex) => {
    if (!enableButtonRef.current) {
      resetGame();
      return;
    }
    if (correctIndex.current < answers.length) {
      const [row, col] = answers[correctIndex.current];
      if (row === rowIndex && col === colIndex) {
        if (correctIndex.current == answers.length - 1) {
          proceedToNextLevel();
        } else {
          correctIndex.current++;
        }
      }
    }
  };

  useEffect(() => {
    if (answers.length) {
      highlightDiv();
      if (index == answers.length) {
        enableButtonRef.current = true;
      }
    }
  }, [answers, index]);

  useEffect(() => {
    fillAnswers();
  }, [level]);

  return (
    <PageTestContainer>
      <div className="text-3xl font-bold text-white ">LEVEL: {level}</div>
      {!lose &&
        reveal.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className="grid grid-cols-3 gap-2">
              {row.map((item, colIndex) => {
                return (
                  <div
                    onClick={() => {
                      checkAnswerPattern(rowIndex, colIndex);
                    }}
                    ref={(elem) =>
                      (cardsRef.current[rowIndex][colIndex] = elem)
                    }
                    key={colIndex}
                    className={`w-20 h-20 cursor-pointer rounded-md bg-blue-200  hover:bg-blue-5`}
                  ></div>
                );
              })}
            </div>
          );
        })}
      {win && <div className="text-white font-bold text-3xl ">You Won</div>}
      {lose && <div className="text-white font-bold text-3xl ">You Lose</div>}
    </PageTestContainer>
  );
}
