"use client";

import React, { useState } from "react";
import WordCountTextArea from "./WordCountTextArea";
import Button from "./SubmitButton";
import { handleProfileSave } from "@/app/actions";
import { Link } from "@prisma/client";

const ProfileInfo = () => {
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const handleTextChange = (newValue: string) => {
    setDescription(newValue);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async () => {
    if (title && description) {
      await handleProfileSave(title, description);
    }
  };

  return (
    <>
      <div className="relative">
        <input
          onChange={handleTitleChange}
          className="w-[400px] lg:w-[600px] p-4 pt-8  bg-gray-100 rounded-lg text-xl  "
          type="text"
        />
        <label className="absolute top-2 left-3 z-10" htmlFor="text">
          Profile title
        </label>
      </div>
      <WordCountTextArea value="df" onChange={handleTextChange} maxWords={80} />
      <Button disabled={false} onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
};

export default ProfileInfo;
