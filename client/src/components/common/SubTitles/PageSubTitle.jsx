export default function PageSubTitle({ children, styles }) {
  return (
    <p
      className={`text-2xl max-w-[768px] my-2 text-white text-opacity-85 ${styles}`}
    >
      {children}
    </p>
  );
}
