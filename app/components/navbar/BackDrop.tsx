import React from "react";

interface BackDropProps {
  onClick: () => void;
}

const BackDrop = ({ onClick }: BackDropProps) => {
  return (
    <div
      onClick={onClick}
      className="
    z-20
    bg-slate-200
    opacity-50
    h-screen
    w-screen
    fixed
    top-0
    left-0


    
    "
    ></div>
  );
};

export default BackDrop;
