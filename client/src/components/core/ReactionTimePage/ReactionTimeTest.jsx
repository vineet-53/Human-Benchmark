import { useEffect, useState, useRef } from "react";
import { FaClock } from "react-icons/fa";
import { PiMouseLeftClickFill } from "react-icons/pi";
import { RxDotsHorizontal } from "react-icons/rx";

export default function ReactionTimeTest() {
  const [status, setStatus] = useState(false);
  const timerRef = useRef(null);
  const [result, setResult] = useState(false);
  const startTimeRef = useRef(null);
  const stopTimeRef = useRef(null);
  const [earlyClick, setEarlyClick] = useState(false);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  const attachTimer = () => {
    const seconds = 5;
    let randomTime = Math.floor(Math.random() * seconds) + 1;
    resetTimer();
    timerRef.current = setTimeout(() => {
      setStatus(true);
      startTimeRef.current = Date.now();
    }, randomTime * 1000);
  };
  const handleStop = () => {
    stopTimeRef.current = Date.now();
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
        className="select-none text-white cursor-pointer bg-extreme-blue h-full flex flex-col gap-3 justify-center items-center text-4xl"
        onMouseDown={handleRestart}
      >
        <FaClock size={70} />
        <div>{`${stopTimeRef.current - startTimeRef.current} ms`}</div>
        <div>Click to keep going...</div>
      </div>
    );
  }
  if (status) {
    return (
      <div
        className="text-white select-none cursor-pointer bg-extreme-green h-full flex flex-col gap-3 justify-center items-center text-3xl"
        onMouseDown={() => {
          console.log("Stopped timer");
          handleStop();
        }}
      >
        <div className="  items-center font-extrabold text-5xl flex flex-col gap-3 text-center">
          <PiMouseLeftClickFill size={70} />
          <span>Click Now!</span>
        </div>
      </div>
    );
  }
  return (
    <div
      className="select-none cursor-pointer bg-extreme-red text-white h-full flex flex-col gap-3 justify-center items-center text-3xl"
      onMouseDown={() => {
        if (!earlyClick) {
          handleEarlyClick();
        } else {
          handleRestart();
          setEarlyClick(false);
        }
      }}
    >
      {earlyClick ? (
        <div className="font-bold text-4xl items-center flex flex-col gap-3 text-center">
          <span>Early Clicked.</span>
          <span>Click again to restart</span>
        </div>
      ) : (
        <div className="font-bold text-5xl flex flex-col items-center ">
          <RxDotsHorizontal size={170} className={"font-extrabold"} />
          <span className="">Wait for Green Light....</span>
        </div>
      )}
    </div>
  );
}
