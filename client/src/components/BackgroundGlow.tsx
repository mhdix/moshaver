import React from "react";

const BackgroundGlow = () => {
  return (
    <>
      <div className="absolute -right-40 -top-40 h-125 w-125 rounded-full bg-primary/10 blur-[140px]" />
      <div className="absolute -bottom-40 -left-40 h-125 w-125 rounded-full bg-orange-300/10 blur-[140px]" />
    </>
  );
};

export default BackgroundGlow;
