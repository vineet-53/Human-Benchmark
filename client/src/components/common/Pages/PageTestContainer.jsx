export default function PageTestContainer({ children, styles, onMouseDown }) {
  return (
    <div
      className={`text-white select-none cursor-pointer h-full flex flex-col gap-3 justify-center items-center ${styles}`}
      onMouseDown={onMouseDown ? onMouseDown : undefined}
    >
      {children}
    </div>
  );
}
