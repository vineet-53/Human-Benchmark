import Button from "./Button";

export default function StartButton({ children, styles, onClick }) {
  return (
    <Button
      styles={`bg-yellow-50 px-5 text-pure-greys-700 text-xl font-bold py-3 shadow-yellow-50 shadow-sm  rounded-lg ${styles}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
