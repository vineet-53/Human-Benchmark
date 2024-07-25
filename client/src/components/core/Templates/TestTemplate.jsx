import Logo from "../../common/Logo";
import PageSubTitle from "../../common/SubTitles/PageSubTitle";
import PageTitle from "../../common/Titles/PageTitle";
import StartButton from "../../common/Buttons/StartButton.jsx";
export default function TestTemplate({
  onClick,
  icon,
  title,
  desc,
  startButton,
}) {
  return (
    <div
      className="text-center select-none cursor-pointer flex flex-col gap-y-5 h-full justify-center items-center "
      onClick={!startButton ? onClick : undefined}
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <Logo
          name={icon}
          styles={"text-[150px] hover:text-pure-greys-25 text-white"}
        />
        <PageTitle>{title} </PageTitle>
        <PageSubTitle>{desc}</PageSubTitle>
      </div>
      {startButton && <StartButton onClick={onClick}>Start</StartButton>}
    </div>
  );
}
