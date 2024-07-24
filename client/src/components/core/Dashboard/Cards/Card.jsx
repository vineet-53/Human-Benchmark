import * as Icons from "react-icons/bs";
export default function Card({ title, desc, icon }) {
  const Icon = Icons[icon];
  return (
    <div className="flex gap-y-9 bg-richblue-5 shadow-richblack-700 lg:h-[300px] group shadow-sm cursor-pointer  duration-300 ease-in-out transition-all rounded-lg  bg-opacity-50 py-12 px-4 flex-col justify-center items-center">
      <div>
        <Icon className="text-5xl text-blue-500 group-hover:text-7xl transition-all duration-300 group-hover:text-blue-300" />
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-blue-200 text-3xl font-bold">{title}</h3>
        <p className="text-pure-greys-200 text-center text-lg">{desc}</p>
      </div>
    </div>
  );
}
