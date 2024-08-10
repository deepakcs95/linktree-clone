"use client";

import { PlatformIcons } from "@/utils/platformTypes";
import React from "react";
import Button from "./submitButton";

export const AddLinks = ({ selectedTypes }: { selectedTypes: string[] }) => {
  const filteredIcons = PlatformIcons.filter(({ name }) => selectedTypes.includes(name));

  const handleSubmit = () => {};

  return (
    <>
      <h3 className="text-xl font-bold">Your Selections</h3>
      {filteredIcons.map(({ name, icon: IconComponent }) => (
        <div className="flex items-center gap-4 w-full max-w-md" key={name}>
          <IconComponent fontSize={50} />
          <input
            placeholder={`${name} username`}
            className="w-full  px-7 py-5 bg-[#f7f8f9] cursor-pointer rounded-xl hover:outline outline-gray-200 focus:outline outline-4 focus:outline-black outline-offset-6 transition-all"
          />
        </div>
      ))}

      <Button disabled={true} onClick={handleSubmit}>
        Continue
      </Button>
    </>
  );
};
