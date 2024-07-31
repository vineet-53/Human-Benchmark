import { forwardRef } from "react";

const Box = forwardRef(function Box({ onClick, id, blink = false }, ref) {
  return (
    <div
      onClick={
        onClick
          ? (e) => {
              onClick(e, id);
            }
          : undefined
      }
      ref={ref}
      className={`duration-500 cursor-pointe rounded-md  hover:bg-blue-50 bg-blue-50  bg-opacity-65`}
    ></div>
  );
});
export default Box;
