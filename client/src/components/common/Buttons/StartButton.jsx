import Button from "./Button";

export default function StartButton({ children, onClick }) {
  return (
    <Button
      styles={
        "bg-yellow-100 px-5 text-xl font-bold py-3 shadow-yellow-50 shadow-sm  rounded-lg"
      }
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
