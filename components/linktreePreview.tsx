"use client";

import { PlatfromSmall } from "@/utils/platformTypes";
import React from "react";
import SubmitButton from "./SubmitButton";

const LinktreePreview = () => {
  const handleSubmit = async () => {
    setTimeout(() => {}, 4000);
  };

  return (
    <>
      <div className="flex flex-col items-center pt-20 gap-10 w-[400px] h-[calc(100vh-300px)]  bg-gray-200 rounded-t-[50px] border-[10px] border-white  p-5 shadow  ">
        <div className="w-36 bg-blue-400 aspect-square rounded-full"></div>
        <h2 className="text-3xl font-extrabold">Deepak</h2>

        <div className="flex gap-2">
          {PlatfromSmall.map((Icon, index) => (
            <Icon key={index} fontSize={40} />
          ))}
        </div>
      </div>
      <SubmitButton
        disabled={false}
        onClick={handleSubmit}
        className="sticky bottom-7 w-[400px] text-white py-5 rounded-xl bg-blue-500"
      >
        Continue
      </SubmitButton>
    </>
  );
};

export default LinktreePreview;
