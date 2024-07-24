import { Link } from "react-router-dom";
import { FaGithub, FaHome } from "react-icons/fa";
export default function Navbar() {
  const handleProfile = () => {
    window.open("https://github.com/vineet-53");
  };
  return (
    <nav className="max-h-24 bg-richblue-700 text-pure-greys-5 p-4 flex items-center justify-end">
      <ul className="font-bold text-3xl flex gap-3 items-center">
        <li>
          <Link to="/">
            <FaHome size={25} />
          </Link>
        </li>
        <li className="cursor-pointer">
          <FaGithub size={25} onClick={handleProfile} />
        </li>
      </ul>
    </nav>
  );
}
