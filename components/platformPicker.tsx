"use client";

import React, { useState } from "react";

const contentTypes: { [key: string]: string[] } = {
  Popular: [
    "Instagram",
    "Tiktok",
    "Website",
    "WhatsApp",
    "OnlineStore",
    "Facebook",
    "Youtube",
    "Spotify",
    "Amazon",
    "X",
    "Linkedin",
  ],
  Creator: [
    "Tiktok",
    "Website",
    "WhatsApp",
    "OnlineStore",
    "Facebook",
    "Youtube",
    "Spotify",
    "Amazon",
    "X",
    "Linkedin",
  ],
  Music: [
    "Instagram",
    "Tiktok",
    "Website",

    "OnlineStore",
    "Facebook",
    "Youtube",
    "Spotify",
    "Amazon",
    "X",
    "Linkedin",
  ],
  Personal: [
    "Instagram",
    "Tiktok",
    "Website",
    "WhatsApp",
    "OnlineStore",
    "Facebook",

    "X",
    "Linkedin",
  ],
};

type ContentType = keyof typeof contentTypes;

const PlatformPicker = () => {
  const [type, setType] = useState<ContentType>("Popular");
  const [selectedItems, setItems] = useState<String[]>([]);

  const handleTypeCHangekey = (key: ContentType) => {
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
  console.log(selectedItems);

  return (
    <div>
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
      <div key={type} className="mt-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {contentTypes[type].map((platform) => (
          <div
            onClick={() => handleSelection(platform)}
            key={platform}
            className={`cursor-pointer rounded-lg  bg-orange-100  ${
              selectedItems.includes(platform) &&
              "outline outline-offset-7 outline-blue-500 outline-3 "
            } m-2 w-32 h-32 shadow-xl flex justify-center items-center transition-all animate-slideUp`}
          >
            {platform}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformPicker;
