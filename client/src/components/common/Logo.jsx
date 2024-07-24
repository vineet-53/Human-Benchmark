import * as BsIcons from "react-icons/bs";
export default function Logo({ name, styles }) {
  const Icon = BsIcons[name];
  return <Icon className={styles} />;
}
