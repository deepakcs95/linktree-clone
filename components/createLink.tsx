"use client";

import { saveUserNames } from "@/app/actions";
import React, { useState } from "react";

function CreateNewLink() {
  const [username, setUsername] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const handleInputChange = (value: string) => {
    setIsChecking(true);
    setTimeout(() => {
      setIsValid(true);
      setIsChecking(false);
    }, 4000);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUserName = event.target.value;
    setUsername(newUserName);
    console.log(newUserName);
    if (newUserName.length > 0) {
      handleInputChange(newUserName);
    } else {
      setIsValid(false);
    }
  };

  return (
    <>
      <div className="w-full relative  cursor-pointer text-xl flex mt-10 items-center focus-within:ring-black  focus-within:ring-2 hover:ring-2 transition duration-75 ease-out  rounded-lg overflow-hidden">
        <label className="pl-14 py-7   bg-gray-200" htmlFor="linktr.ee/">
          linktr.ee/
        </label>
        <input
          className="w-full py-7 bg-gray-200 outline-none"
          type="text"
          value={username}
          name="Username"
          placeholder="Username"
          onChange={(e) => onInputChange(e)}
        />
      </div>
      <p className="pt-12 py-8 text-gray-600 text-[18px] text-center">
        By continuing, you agree to receive offers, news and updates from Linktree
      </p>
      <button
        onClick={async () => await saveUserNames()}
        disabled={!isValid || isChecking}
        className="w-full bg-blue-600 hover:bg-blue-500 p-6 text-xl text-white rounded-3xl disabled:bg-gray-500"
      >
        {!isValid || isChecking ? "checking" : "Continue"}
      </button>
    </>
  );
}

export default CreateNewLink;
