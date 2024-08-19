"use client";

import { saveUserNames } from "@/app/actions";
import React, { useCallback, useState } from "react";
import { debounce } from "lodash";
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineDangerous } from "react-icons/md";
import SubmitButton from "./SubmitButton";

function CreateNewLink() {
  const [username, setUsername] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const handleInputChange = useCallback(
    debounce(async (value: string) => {
      setIsChecking(true);
      setIsValid(null);
      try {
        const response = await fetch(`/api/user/${value}`, {
          method: "GET",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setIsValid(data.isAvailable);
      } catch (error) {
        console.error("Error checking username:", error);
        setIsValid(null);
      } finally {
        setIsChecking(false);
      }
    }, 300),
    []
  );

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUserName = event.target.value.replace(/[^a-zA-Z0-9]/g, "");
    setUsername(newUserName);
    if (newUserName.length > 0) {
      handleInputChange(newUserName);
    } else {
      setIsValid(false);
    }
  };

  const onSubmit = async () => {
    setIsChecking(true);
    await saveUserNames(username);
  };

  return (
    <>
      <div className="w-full relative bg-gray-200 text-base lg:text-lg flex mt-6 lg:mt-10 items-center focus-within:ring-black focus-within:ring-2 hover:ring-2 transition duration-75 ease-out rounded-lg">
        <label className="pl-3 lg:pl-10 py-3 lg:py-6 bg-gray-200" htmlFor="linktr.ee/">
          linktr.ee/
        </label>
        <input
          className="w-full py-3 lg:py-6 bg-gray-200 outline-none"
          type="text"
          value={username}
          name="Username"
          placeholder="Username"
          onChange={onInputChange}
        />
        {isChecking && (
          <span className="bg-black mx-2 lg:mx-4 loading loading-spinner loading-sm lg:loading-lg"></span>
        )}
        {isValid && <GrStatusGood className="mx-2 lg:mx-4" color="green" fontSize={20} />}
        {isValid === false && (
          <MdOutlineDangerous className="mx-2 lg:mx-4" color="red" fontSize={20} />
        )}
      </div>
      <p className="pt-8 lg:pt-12 pb-4 lg:pb-8 text-gray-600 text-base lg:text-lg text-center">
        By continuing, you agree to receive offers, news, and updates from Linktree.
      </p>
      <SubmitButton disabled={!isValid || isChecking} onClick={onSubmit}>
        Continue
      </SubmitButton>
    </>
  );
}

export default CreateNewLink;
