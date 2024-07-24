export default function PageTitle({ children, styles }) {
  return (
    <h2 className={`text-5xl mt-10 font-bold text-white ${styles}`}>
      {children}
    </h2>
  );
}
