interface HeadingProps {
  title: string;
  center?: boolean;
}

import React from "react";

const Heading = ({ title, center }: HeadingProps) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h1 className="font-bold text-2xl">{title}</h1>
    </div>
  );
};

export default Heading;
