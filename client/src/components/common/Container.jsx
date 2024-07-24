export default function Container({ children, styles }) {
  return <div className={` w-full ${styles} `}>{children}</div>;
}
