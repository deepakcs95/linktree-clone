"use client";

import { saveSelectedPlatformItems } from "@/app/actions";
import { contentTypes } from "@/utils/platformTypes";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton";

type ContentKeyType = keyof typeof contentTypes;

const PlatformPicker = () => {
  const [type, setType] = useState<ContentKeyType>("Popular");
  const [selectedItems, setItems] = useState<String[]>([]);

  const handleTypeCHangekey = (key: ContentKeyType) => {
    setType(key);
  };

  const handleSelection = (key: String) => {
    setItems((prev) => {
      if (prev.includes(key)) {
        return prev.filter((item) => item !== key);
      } else {
        return [...prev, key];
      }
    });
  };
  console.log(selectedItems.length < 4);

  return (
    <div className="flex flex-col items-center min-w-md ">
      <div className="flex  justify-center gap-3">
        {Object.entries(contentTypes).map(([id, val]) => (
          <div
            className={`${
              type === id ? "bg-black text-white" : "bg-white shadow-md text-black"
            } cursor-pointer px-6 py-2 rounded-2xl slideUp  `}
            key={id}
            onClick={() => handleTypeCHangekey(id)}
          >
            <div>{id}</div>
          </div>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {contentTypes[type].map((item) => {
          const Icon = item.icon;

          return (
            <div
              onClick={() => handleSelection(item.name)}
              key={item.name}
              className={`cursor-pointer rounded-lg  bg-orange-100  ${
                selectedItems.includes(item.name) &&
                "outline outline-offset-7 outline-blue-500 outline-3 "
              } m-2 w-32 h-32 shadow-xl flex justify-center items-center transition-all animate-slideUp`}
            >
              <Icon fontSize={40} />
            </div>
          );
        })}
      </div>
      <SubmitButton
        disabled={selectedItems.length < 5}
        onClick={() => saveSelectedPlatformItems(selectedItems)}
      >
        Next
      </SubmitButton>
    </div>
  );
};

export default PlatformPicker;
