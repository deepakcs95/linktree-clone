import { PlatfromSmall } from "@/utils/platformTypes";
import React from "react";

const LinktreePreview = () => {
  return (
    <div className="flex flex-col items-center pt-20 gap-10 w-[400px] h-[calc(100vh-300px)]  bg-gray-200 rounded-t-[50px] border-[10px] border-white  p-5 shadow  ">
      <div className="w-36 bg-blue-400 aspect-square rounded-full"></div>
      <h2 className="text-3xl font-extrabold">Deepak</h2>

      <div className="flex gap-2">
        {PlatfromSmall.map((Icon) => (
          <Icon fontSize={40} />
        ))}
      </div>
    </div>
  );
};

export default LinktreePreview;
