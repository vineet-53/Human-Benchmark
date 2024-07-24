export default function Button({ children, styles, onClick }) {
  return (
    <button
      className={`${styles} text-xl font-bold shadow-sm rounded-lg`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
