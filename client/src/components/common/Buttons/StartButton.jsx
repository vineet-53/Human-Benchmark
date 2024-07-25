import Button from "./Button";

export default function StartButton({ children, styles, onClick }) {
  return (
    <Button
      styles={`bg-yellow-100 px-5 text-xl font-bold py-3 shadow-yellow-50 shadow-sm  rounded-lg ${styles}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
