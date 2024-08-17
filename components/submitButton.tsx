import React, { useEffect, useState } from "react";

type ButtonProps = {
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

const SubmitButton: React.FC<ButtonProps> = React.memo(
  ({ onClick, disabled, children, className = "" }) => {
    const [isLoading, setisLoading] = useState<null | boolean>(null);

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (!disabled) {
        setisLoading(true);
      }
      try {
        await Promise.resolve(onClick());
      } finally {
        setisLoading(null);
      }
    };

    return (
      <button
        disabled={isLoading || disabled}
        onClick={(e) => handleSubmit(e)}
        className={`disabled:bg-gray-400  disabled:cursor-not-allowed
       w-[400px] md:w-[600px] items-center rounded-3xl mt-7 text-white px-16 py-5 bg-blue-600 ${className}`}
      >
        {!isLoading && children}
        {isLoading && <span className="bg-black   loading loading-spinner loading-md"></span>}
      </button>
    );
  }
);

export default SubmitButton;
