import React from "react";

type ButtonProps = {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`disabled:bg-gray-400 disabled:cursor-not-allowed
       w-[400px] md:w-[600px] items-center rounded-3xl mt-7 text-white px-16 py-5 bg-blue-600`}
    >
      {children}
    </button>
  );
};

export default Button;
