"use client";

import React, { useState } from "react";
import { IconType } from "react-icons";
import { CgWebsite } from "react-icons/cg";
import {
  FaAmazon,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaShoppingCart,
  FaSpotify,
  FaTiktok,
  FaWhatsapp,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

type ContentType = {
  name: String;
  icon: IconType;
};

const contentTypes: { [key: string]: ContentType[] } = {
  Popular: [
    { name: "Instagram", icon: FaInstagramSquare },
    { name: "Tiktok", icon: FaTiktok },
    { name: "Website", icon: CgWebsite },
    { name: "WhatsApp", icon: FaWhatsapp },
    { name: "OnlineStore", icon: FaShoppingCart },
    { name: "Facebook", icon: FaFacebook },
    { name: "Youtube", icon: FaYoutubeSquare },
    { name: "Spotify", icon: FaSpotify },
    { name: "Amazon", icon: FaAmazon },
    { name: "X", icon: FaWhatsapp },
    { name: "Linkedin", icon: FaLinkedin },
  ],
  Creator: [
    { name: "Tiktok", icon: FaTiktok },
    { name: "Website", icon: FaWhatsapp },
    { name: "Youtube", icon: FaYoutubeSquare },
    { name: "Instagram", icon: FaInstagramSquare },
    { name: "Facebook", icon: FaFacebook },
    // Add more relevant items for creators
  ],
  Music: [
    { name: "Spotify", icon: FaSpotify },
    { name: "Youtube", icon: FaYoutubeSquare },
    { name: "Amazon", icon: FaAmazon },
    // Add or remove music-related items
  ],
  Personal: [
    { name: "WhatsApp", icon: FaWhatsapp },
    { name: "Facebook", icon: FaFacebook },
    { name: "Instagram", icon: FaInstagramSquare },
    { name: "X", icon: FaSquareXTwitter },
    // Add more personal-use items if needed
  ],
};

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
  console.log(selectedItems);

  return (
    <div className="flex flex-col min-w-md ">
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
      <button className="items-center rounded-3xl mt-7 text-white px-16 py-5 bg-blue-600">
        Next
      </button>
    </div>
  );
};

export default PlatformPicker;
