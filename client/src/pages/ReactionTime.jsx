import { useEffect, useState } from "react";
import Logo from "../components/common/Logo";
import { pages } from "../data/pages.data";
import StartButton from "../components/common/Buttons/StartButton";
import PageTitle from "../components/common/Titles/PageTitle";
import PageSubTitle from "../components/common/SubTitles/PageSubTitle";
import ReactionTimeTest from "../components/core/ReactionTimePage/ReactionTimeTest";
export default function ReactionTime() {
  const data = pages.data[0];
  const [test, setTest] = useState(false);
  const handleStart = () => {
    console.log("start the test");
    setTest(true);
  };
  useEffect(() => {
    setTest(false);
  }, []);
  if (test) {
    return <ReactionTimeTest />;
  }
  return (
    <div
      className="text-center select-none cursor-pointer flex flex-col gap-3 h-full justify-center items-center "
      onClick={handleStart}
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <Logo
          name={data.icon}
          styles={"text-[150px] hover:text-pure-greys-25 text-white"}
        />
        <PageTitle>{data.title} </PageTitle>
        <PageSubTitle>{data.desc}</PageSubTitle>
      </div>
    </div>
  );
}
