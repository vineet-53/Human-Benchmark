import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
export default function Navbar() {
  const handleProfile = () => {
    window.open("https://github.com/vineet-53");
  };
  return (
    <nav className="max-h-24 bg-richblue-700 text-pure-greys-5 p-4">
      <ul className="font-bold text-3xl flex justify-between">
        <li>
          <Link to="/">Human Benchmark</Link>
        </li>
        <li className="cursor-pointer">
          <FaGithub onClick={handleProfile} />
        </li>
      </ul>
    </nav>
  );
}
