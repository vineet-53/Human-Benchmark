import { useEffect, useState, useRef } from "react";
import { FaClock, FaRegSadCry } from "react-icons/fa";
import { PiMouseLeftClickFill } from "react-icons/pi";
import Result from "../../common/Pages/Result";
import PageTestContainer from "../../common/Pages/PageTestContainer";
import WaitingLoader from "../../common/Loader/ReactionTimePage/WaitingLoader";

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
      <Result onMouseDown={handleRestart} styles={"select-none cursor-pointer"}>
        <FaClock size={80} />
        <div>{`${stopTimeRef.current - startTimeRef.current} ms`}</div>
        <div>Click to keep going...</div>
      </Result>
    );
  }
  if (status) {
    return (
      <PageTestContainer
        onMouseDown={handleStop}
        styles={"text-3xl bg-extreme-green cursor-pointer select-none"}
      >
        <div className="  items-center font-extrabold text-5xl flex flex-col gap-3 text-center">
          <PiMouseLeftClickFill size={70} />
          <span>Click Now!</span>
        </div>
      </PageTestContainer>
    );
  }
  return (
    <PageTestContainer
      styles={"select-none cursor-pointer bg-extreme-red text-3xl"}
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
          <FaRegSadCry size={70} />
          <span>Early Clicked.</span>
          <span>Click again to restart</span>
        </div>
      ) : (
        <div className="font-bold text-4xl flex flex-col items-center ">
          <WaitingLoader styles={"text-white text-3xl font-bold"} />
          <span className="">Wait for Green Light....</span>
        </div>
      )}
    </PageTestContainer>
  );
}
