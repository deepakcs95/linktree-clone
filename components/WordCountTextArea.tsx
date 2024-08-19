"use client";
import React, { useState } from "react";
import Button from "./SubmitButton";

interface WordCountTextAreaProps {
  maxWords: number;
  value: string;
  onChange: (value: string) => void;
}

const WordCountTextArea: React.FC<WordCountTextAreaProps> = ({ maxWords, value, onChange }) => {
  const [text, setText] = useState<string>("");
  const [wordCount, setWordCount] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    const words = newText.trim().split(/\s+/).filter(Boolean); // Split by whitespace and filter empty strings

    let newWordCount;
    if (words.length !== 0) {
      newWordCount = words[0].length;
    } else newWordCount = 0;

    if (newWordCount > maxWords) return;
    setText(newText);
    setWordCount(newWordCount);
    onChange(newText);
  };

  return (
    <>
      <div className="relative">
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Type here..."
          className="w-[400px] lg:w-[600px] p-4 pt-8  bg-gray-100 rounded-lg text-xl "
        />
        <label className="absolute top-2 left-3 z-10" htmlFor="text">
          Bio
        </label>
        <div className=" absolute bottom-4 right-4 text-sm text-gray-600">
          {wordCount}/{maxWords} words
        </div>
      </div>
    </>
  );
};

export default WordCountTextArea;
