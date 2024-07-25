export default function Result({ children, styles, onMouseDown }) {
  return (
    <div
      onMouseDown={onMouseDown ? onMouseDown : undefined}
      className={`bg-extreme-blue text-white h-full flex flex-col gap-3 justify-center items-center text-3xl ${styles}`}
    >
      {children}
    </div>
  );
}
