import { title } from "process";
import React from "react";

interface HeaderTextProp {
  title: string;
  subtitle: string;
}

const CreateLinkHeader: React.FC<HeaderTextProp> = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="animate-slideUp  font-extrabold text-5xl text-center">{title}</h2>
      <p className="animate-slideUp  max-w-[40ch] text-gray-500 text-xl px-2 text-center">
        {subtitle}
      </p>
    </>
  );
};

export default CreateLinkHeader;
