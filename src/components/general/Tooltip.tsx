"use client";

import { useRef } from "react";

const Tooltip = ({
  text,
  children,
  orientation,
}: {
  text: string;
  children: React.ReactNode;
  orientation: string;
}) => {
  const tipRef = useRef<HTMLDivElement | null>(null);

  const orientations = {
    right: "right",
    top: "top",
    bottom: "bottom",
    left: "left",
  };

  const setContainerPosition = (orientation: any) => {
    let classnames;

    switch (orientation) {
      case orientations.right:
        classnames = "top-0 left-full ml-4";
        break;
      case orientations.left:
        classnames = "top-0 right-full mr-4";
        break;
      case orientations.top:
        classnames = "bottom-full left-[50%] translate-x-[-50%] -translate-y-2";
        break;
      case orientations.bottom:
        classnames = "top-full left-[50%] translate-x-[-50%] translate-y-2";
        break;

      default:
        break;
    }

    return classnames;
  };

  const setPointerPosition = (orientation: any) => {
    let classnames;

    switch (orientation) {
      case orientations.right:
        classnames = "left-[-6px]";
        break;
      case orientations.left:
        classnames = "right-[-6px]";
        break;
      case orientations.top:
        classnames = "top-full left-[50%] translate-x-[-50%] -translate-y-2";
        break;
      case orientations.bottom:
        classnames = "bottom-full left-[50%] translate-x-[-50%] translate-y-2";
        break;

      default:
        break;
    }

    return classnames;
  };

  const handleMouseEnter = () => {
    if (tipRef.current) {
      tipRef.current.style.opacity = "1";
    }
  };
  function handleMouseLeave() {
    if (tipRef.current) {
      tipRef.current.style.opacity = "0";
    }
  }

  const classContainer = `absolute z-10 ${setContainerPosition(
    orientation
  )} bg-gray-600 text-white text-sm px-3 py-[7px] rounded flex items-center transition-all duration-150 pointer-events-none word-wrap`;

  const pointerClasses = `bg-gray-600 h-3 w-3 absolute z-10 ${setPointerPosition(
    orientation
  )} rotate-45 pointer-events-none`;

  return (
    <>
      <div className="relative flex items-center">
        <div className={classContainer} style={{ opacity: 0 }} ref={tipRef}>
          <div className={pointerClasses} />
          {text}
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Tooltip;
