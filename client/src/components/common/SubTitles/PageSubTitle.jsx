export default function PageSubTitle({ children, styles }) {
  return (
    <p className={`text-2xl text-pure-greys-100 text-opacity-70 ${styles}`}>
      {children}
    </p>
  );
}
