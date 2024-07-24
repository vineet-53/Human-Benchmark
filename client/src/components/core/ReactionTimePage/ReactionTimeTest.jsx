import { useEffect, useState, useRef } from "react";

export default function ReactionTimeTest() {
  const [status, setStatus] = useState(false);
  const timerRef = useRef(null);
  const [result, setResult] = useState(false);
  const [earlyClick, setEarlyClick] = useState(false);
  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  const attachTimer = () => {
    const seconds = 5;
    let randomTime = Math.ceil(Math.random() * seconds);
    resetTimer();
    timerRef.current = setTimeout(() => {
      setStatus(true);
    }, randomTime * 1000);
  };
  const handleStop = () => {
    resetTimer();
    setResult(true);
  };

  const handleRestart = () => {
    setStatus(false);
    attachTimer();
    setResult(false);
  };

  const handleEarlyClick = () => {
    resetTimer();
    setEarlyClick(true);
  };
  useEffect(() => {
    attachTimer();
  }, []);

  if (result) {
    return (
      <div
        className="select-none text-white cursor-pointer bg-blue-200 h-full flex flex-col gap-3 justify-center items-center text-4xl"
        onClick={handleRestart}
      >
        <div>Results</div>
        <div>Click To Test Again...</div>
      </div>
    );
  }
  if (status) {
    return (
      <div
        className="text-white select-none cursor-pointer bg-caribbeangreen-200 h-full flex flex-col gap-3 justify-center items-center text-3xl"
        onClick={() => {
          console.log("Stopped timer");
          handleStop();
        }}
      ></div>
    );
  }
  return (
    <div
      className="select-none cursor-pointer bg-pink-200 text-white h-full flex flex-col gap-3 justify-center items-center text-3xl"
      onClick={() => {
        if (!earlyClick) {
          handleEarlyClick();
        } else {
          handleRestart();
          setEarlyClick(false);
        }
      }}
    >
      {earlyClick ? (
        <div className="font-bold text-4xl flex flex-col gap-3 text-center">
          <span>Early Clicked.</span>
          <span>Click again to restart</span>
        </div>
      ) : (
        <div className="font-bold text-4xl">Wait for Green Light....</div>
      )}
    </div>
  );
}
